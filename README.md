# MMM-Remote-Control-Repository
Plugin for MMM-Remote-Control to update modules.json automatically

This module update `modules.json` of `MMM-Remote-Control` automatically with https://github.com/MichMich/MagicMirror/wiki/MagicMirror%C2%B2-Modules

## Install
```
cd <your MagicMirror Directory>/modules
git clone https://github.com/eouia/RepositoryForRC.git
```

## Configuration
```
{
  module: "MMM-Remote-Control-Repository",
}
```

## How to Use
Nothing to do by yourself. Just after installation, when every MM is restarted, `modules.json` is updated automatically, so you can install new modules with MMM-Remote-Control.
This plugin doesn't anything without `MMM-Remote-Control`.

## Misc.
- Updated `modules.json` will be affected from **NEXT** execution of MagicMirror.

Thanks to @Jopyth for great module `MMM-Remote-Control`.
