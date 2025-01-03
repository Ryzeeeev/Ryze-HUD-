-- Initial Data Request
RegisterNetEvent('gameui:requestInitialData')
AddEventHandler('gameui:requestInitialData', function()
    local source = source
    local playerData = Database.GetPlayerData(source)
    local inventoryData = Database.GetInventory(source)
    
    TriggerClientEvent('gameui:playerLoaded', source, {
        playerData = playerData,
        inventoryData = inventoryData
    })
end)

RegisterCommand("ryzeTest", function(source)
    local player = Bridge.GetPlayer(source)
    if not player then return end

    TriggerClientEvent('gameui:playerLoaded', source, {
        playerData = {
            health = GetEntityHealth(GetPlayerPed(source)) / 2,
            armor = GetPedArmour(GetPlayerPed(source)),
            stamina = 0,
            money = Bridge.GetPlayerAccountFunds(source, "money"),
            bank = Bridge.GetPlayerAccountFunds(source, "bank"),
        },
        location = {
            heading = 30.0
        }
    })
end)

-- Money Updates
RegisterNetEvent('gameui:addMoney')
AddEventHandler('gameui:addMoney', function(amount)
    local source = source
    local playerData = Database.UpdateMoney(source, amount)
    
    TriggerClientEvent('gameui:updatePlayerData', source, playerData)
end)