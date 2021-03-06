# Changelogs

## 1.9.0 - September 25, 2018

- Added: Support VSCode [Portable Mode](https://code.visualstudio.com/docs/editor/portable).

- Changed: `Improve the performance` of the synchronization process, and use a new CDN to install extensions, which should significantly accelerate the synchronization.

- Changed: Simplify the `extensions.json` file.

- Fixed: Added `CaseInsensitiveMap` and `CaseInsensitiveSet` to fix the inconsistency of VSCode extension's id.


## 1.8.2 - September 12, 2018

- Added: A new setting: `syncing.separateKeybindings`, so that you can decide whether to synchronize the `keybindings` through `one single file`.

- Fixed: The diff algorithm (Thank [@agross](https://github.com/agross) for the feedback).

- Fixed: A bug of extensions auto-update function.


## 1.8.1 - July 31, 2018

- Changed: Use lowercase extension metadata.

- Changed: Narrow the scope of diff down to improve the user experience.


## 1.8.0 - July 28, 2018

- Added: Exclude VSCode extensions from being synchronized.

- Added: Automatically update your extensions during the synchronization.

- Changed: Change some settings of `Syncing` to improve the scalability.


## 1.7.3 - July 15, 2018

- Changed: README.


## 1.7.2 - July 14, 2018

- Fixed: An error during the uploading.


## 1.7.1 - July 14, 2018

- Changed: Delete the `settings-mac.json` file automatically after uploading.


## 1.7.0 - July 13, 2018

- Changed: Merge the `settings.json` and `settings-mac.json` files into one, i.e., the `settings.json` file.
- Changed: Check the `editor.formatOnSave` setting before formating the settings file during the synchronization.


## 1.6.2 - May 11, 2018

- Changed: Format `VSCode User Settings` file.
- Changed: Replace `temp` with `tmp`.
- Fixed: Automatically clean up temporary file and directory.


## 1.6.1 - May 10, 2018

- Fixed: Replace `adm-zip` with `extract-zip` to fix a bug on windows, finally!


## 1.6.0 - May 09, 2018

- Added: `README` for Simplified Chinese.
- Added: [Poka-Yoke (Mistake-Proofing)](https://en.wikipedia.org/wiki/Poka-yoke), see [#25](https://github.com/nonoroazoro/vscode-syncing/issues/25) (Thank [@christianmalek](https://github.com/christianmalek) for the advice).
- Added: Exclude VSCode settings from being synced, see [#29](https://github.com/nonoroazoro/vscode-syncing/issues/29) (Thank [@alexanderius](https://github.com/i4004) for the advice).
- Fixed: Filter out system junk files such as `.DS_Store` and `Thumbs.db`.


## 1.5.3 - February 08, 2018

- Fixed: An error introduced by VSCode 1.20.


## 1.5.2 - December 28, 2017

- Changed: Enhance user guides.
- Fixed: A bug caused by `adm-zip` on Linux Mint and Xubuntu ([Issue #21](https://github.com/nonoroazoro/vscode-syncing/issues/21)).


## 1.5.1 - December 04, 2017

- Added: Added `Breaking Changes` section in `README`.
- Changed: Simplified user guide.
- Changed: Reduced extension file size.


## 1.5.0 - December 02, 2017

- Added: Separate the `http_proxy` setting into `Syncing`'s own settings file (which means `Syncing` will no longer read proxy settings from `VSCode` settings), this may prevent a potential failure caused by wrong proxy settings while syncing between different devices (Thank [@mubaidr](https://github.com/mubaidr) for the advice).
- Added: Pick `http_proxy` settings from `http_proxy` and `https_proxy` environment variables.
- Changed: Rewrite in `TypeScript`, now we have `typings`.


## 1.4.9 - September 16, 2017

- Added: Empty extension's directory before the installation.
- Changed: Enhance user guides.


## 1.4.8 - September 14, 2017

- Revert shit: The links of getting started and example aren't working in VSCode marketplace.


## 1.4.7 - September 14, 2017

- Added: Disable upload and download commands when the synchronization is in progress.
- Changed: Validation of Gist id.
- Trying to fix shit: Getting Started and Example anchors aren't working in VSCode.


## 1.4.6 - September 14, 2017

- Fixed: Getting started link and Example link.


## 1.4.5 - September 14, 2017

- Added: Progress indicator of synchronization.
- Changed: Enhance user guides.
- Changed: Various other tweaks.


## 1.4.4 - July 17, 2017

- Fixed: Getting started link.


## 1.4.3 - July 15, 2017

- Fixed: VSCode Marketplace Link.


## 1.4.2 - July 15, 2017

- Added: Show remote Gist list when uploading/downloading for the first time, makes it easier to use. But also, low speed network will make it suffer. Please use proxy (Thank [@Henry Li](https://github.com/MagicCube) for the advice).
- Added: Add `Getting Started` in `README`.
- Changed: Tweak error handlers and toasts.


## 1.4.1 - July 12, 2017

- Changed: First attempt to change the logo.


## 1.4.0 - July 12, 2017

- Fixed: Image URLs are now resolved to `https` URLs as required by VSCode-1.14.


## 1.3.9 - June 09, 2017

- Fixed: Use extension's local version to properly remove the old extensions.


## 1.3.8 - May 15, 2017

- Changed: Tweak the timeout threshold to reduce the connection failures on slow networks.


## 1.3.7 - May 04, 2017

- Fixed: Reset keyboard-shortcuts image size.


## 1.3.6 - May 04, 2017

- Changed: Resize keyboard-shortcuts image.


## 1.3.5 - May 04, 2017

- Changed: Update guides.


## 1.3.4 - April 07, 2017

- Fixed: Minor fixes to the Downloading and Uploading features.


## 1.3.3 - March 03, 2017

- Fixed: Checking user access privileges when uploading.


## 1.3.2 - March 02, 2017

- Changed: The messages of `Settings File Not Found` and `Setting File Invalid` errors.
- Fixed: Upload an `empty array` (instead of `null`) when extension list is empty, to avoid potential error.


## 1.3.1 - February 21, 2017

- Fixed: The messages of download dialog.


## 1.3.0 - February 21, 2017

- Changed: Upload and download dialogs.
- Changed: Separate error messages of invalid GitHub Personal Access Token and Gist ID.
- Changed: Enhance user guides.


## 1.2.9 - February 08, 2017

- Added: Clean up temporary files automatically.
- Changed: Pretty JSON files: `extensions.json`, `syncing.json`, make it a little more user-friendly (Thank [@fengcen](https://github.com/fengcen) for the advice).


## 1.2.8 - December 30, 2016

- Changed: Enhance user guides.


## 1.2.7 - December 30, 2016

- Fixed: Ignore `null` content to avoid node-github error.


## 1.2.6 - November 10, 2016

- Fixed: Reload dialog isn't shown when extensions are changed.


## 1.2.5 - November 09, 2016

- Added: Hints of the synchronization.
- Added: Show reload dialog when extensions are changed.
- Added: Support download settings from public Gist.
- Fixed: Sync extensions aren't managed by VSCode.
