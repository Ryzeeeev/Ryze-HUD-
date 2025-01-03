fx_version 'cerulean'
game 'gta5'

author 'Your Name'
description 'Advanced FiveM UI System'
version '1.0.0'

ui_page 'web/dist/index.html'

shared_scripts {
    'shared/config.lua',
    'shared/utils.lua'
}

client_scripts {
    'bridge/client.lua',
    'client/main.lua',
    'client/commands.lua',
    'client/events.lua',
    'client/state.lua'
}

server_scripts {
    'bridge/server.lua',
    'server/main.lua',
    'server/events.lua',
    'server/database.lua'
}

files {
    'web/dist/index.html',
    'web/dist/**/*'
}