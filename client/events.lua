-- Initial Setup
RegisterNetEvent('gameui:playerLoaded')
AddEventHandler('gameui:playerLoaded', function(data)
    State.UpdatePlayerData(data.playerData)
end)

-- Player Data Updates
RegisterNetEvent('gameui:updatePlayerData')
AddEventHandler('gameui:updatePlayerData', function(data)
    State.UpdatePlayerData(data)
end)

-- NUI Callbacks
RegisterNUICallback('toggleUI', function(data, cb)
    ExecuteCommand('toggleui')
    cb({})
end)