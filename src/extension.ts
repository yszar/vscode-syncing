import * as moment from "moment";
import * as vscode from "vscode";

import { Gist, Syncing, VSCodeSetting } from "./core";
import * as Toast from "./core/Toast";
import { ISyncedItem } from "./types/SyncingTypes";

let _syncing: Syncing;
let _vscodeSetting: VSCodeSetting;
let _isSynchronizing: boolean;

export function activate(context: vscode.ExtensionContext)
{
    _init(context);
}

/**
 * Init.
 */
function _init(context: vscode.ExtensionContext)
{
    _isSynchronizing = false;
    _syncing = Syncing.create();
    _vscodeSetting = VSCodeSetting.create();

    // TODO: i18n, using vscode.env.language
    moment.locale("en");

    _initCommands(context);
}

/**
 * Init the extension's commands.
 */
function _initCommands(context: vscode.ExtensionContext)
{
    _registerCommand(context, "syncing.uploadSettings", _uploadSettings);
    _registerCommand(context, "syncing.downloadSettings", _downloadSettings);
    _registerCommand(context, "syncing.openSettings", _openSettings);
}

/**
 * VSCode's registerCommand wrapper.
 */
function _registerCommand(context: vscode.ExtensionContext, command: string, callback: () => void)
{
    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(vscode.commands.registerCommand(command, callback));
}

/**
 * Uploads your settings.
 */
function _uploadSettings()
{
    if (!_isSynchronizing)
    {
        _isSynchronizing = true;
        _syncing.prepareUploadSettings(true).then((syncingSettings) =>
        {
            const api = Gist.create(syncingSettings.token, _syncing.proxy);
            return _vscodeSetting.getSettings(true, true).then((settings) =>
            {
                return api.findAndUpdate(syncingSettings.id, settings, true, true).then((gist) =>
                {
                    if (gist.id === syncingSettings.id)
                    {
                        Toast.statusInfo("Syncing: Settings uploaded.");
                    }
                    else
                    {
                        _syncing.saveSettings({ ...syncingSettings, id: gist.id }).then(() =>
                        {
                            Toast.statusInfo("Syncing: Settings uploaded.");
                        });
                    }

                    _isSynchronizing = false;
                });
            });
        }).catch(() =>
        {
            _isSynchronizing = false;
        });
    }
}

/**
 * Downloads your settings.
 */
function _downloadSettings()
{
    if (!_isSynchronizing)
    {
        _isSynchronizing = true;
        _syncing.prepareDownloadSettings(true).then((syncingSettings) =>
        {
            const api = Gist.create(syncingSettings.token, _syncing.proxy);
            return api.get(syncingSettings.id, true).then((gist) =>
            {
                return _vscodeSetting.saveSettings(gist.files, true).then((syncedItems) =>
                {
                    Toast.statusInfo("Syncing: Settings downloaded.");
                    if (_isExtensionsSynced(syncedItems))
                    {
                        Toast.showReloadBox();
                    }

                    _isSynchronizing = false;
                });
            }).catch((err) =>
            {
                if (err.code === 401)
                {
                    _syncing.clearGitHubToken();
                }
                else if (err.code === 404)
                {
                    _syncing.clearGistID();
                }

                _isSynchronizing = false;
            });
        }).catch(() =>
        {
            _isSynchronizing = false;
        });
    }
}

/**
 * Opens the Syncing's settings file in a VSCode editor.
 */
function _openSettings()
{
    _syncing.openSettings();
}

/**
 * Determines whether the extensions are actually synchronized.
 */
function _isExtensionsSynced(syncedItems: { updated: ISyncedItem[], removed: ISyncedItem[] }): boolean
{
    for (const item of syncedItems.updated)
    {
        if (item.extension && (
            item.extension.added.length > 0
            || item.extension.removed.length > 0
            || item.extension.updated.length > 0)
        )
        {
            return true;
        }
    }
    return false;
}
