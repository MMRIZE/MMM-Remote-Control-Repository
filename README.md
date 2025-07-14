**Deprecation note:** This module is no longer necessary, as **MMM-Remote-Control** now updates the modules.json file itself.

# MMM-Remote-Control-Repository

Plugin for [MMM-Remote-Control](https://github.com/Jopyth/MMM-Remote-Control) to update `modules.json` automatically.

This module updates `modules.json` of `MMM-Remote-Control` automatically with <https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules>.

## Install

```sh
cd <your MagicMirror Directory>/modules
git clone https://github.com/MMRIZE/MMM-Remote-Control-Repository
```

## Configuration

```js
{
  module: "MMM-Remote-Control-Repository",
},
```

## How to Use

Nothing to do by yourself. Just after installation, when MagicMirror² is restarted, `modules.json` is updated automatically, so you can install new modules with MMM-Remote-Control.

This plugin doesn't do anything without `MMM-Remote-Control`.

## Misc

Updated `modules.json` will be affected from **NEXT** execution of MagicMirror².

Thanks to @Jopyth for great module `MMM-Remote-Control`.
