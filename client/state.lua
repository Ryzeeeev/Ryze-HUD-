State = {
    display = false,
    playerData = {
        name = "",
        id = 0,
        job = "",
        money = 0,
        bank = 0
    },
    inventory = {
        items = {},
        maxWeight = Config.MaxInventoryWeight,
        currentWeight = 0
    },
    notifications = {}
}

-- Gestionnaire d'état global
function State.Init()
    State.display = false
    SetNuiFocus(false, false)
    
    -- Demande initiale des données
    TriggerServerEvent('gameui:requestInitialData')
end

function State.ToggleDisplay()
    State.display = not State.display
    SetNuiFocus(State.display, State.display)
    SendNUIMessage({
        type = 'setVisible',
        data = State.display
    })
end

function State.UpdatePlayerData(data)
    State.playerData = data
    SendNUIMessage({
        type = 'updatePlayerData',
        data = data
    })
end

function State.updateLocation(data)
    State.location = data
    SendNUIMessage({
        type = 'updateLocation',
        data = data
    })
end


function State.UpdateInventory(data)
    State.inventory = data
    SendNUIMessage({
        type = 'updateInventory',
        data = data
    })
end

function State.AddNotification(message, notifType)
    local notification = {
        id = #State.notifications + 1,
        message = message,
        type = notifType or "info",
        timestamp = "ihutrjihijrth"
    }
    
    table.insert(State.notifications, 1, notification)
    
    -- Limite à 5 notifications
    while #State.notifications > 5 do
        table.remove(State.notifications)
    end
    
    SendNUIMessage({
        type = 'updateNotifications',
        data = { notifications = State.notifications }
    })
    
    -- Auto-suppression après délai
    Citizen.SetTimeout(Config.NotificationDuration, function()
        for i, notif in ipairs(State.notifications) do
            if notif.id == notification.id then
                table.remove(State.notifications, i)
                SendNUIMessage({
                    type = 'updateNotifications',
                    data = { notifications = State.notifications }
                })
                break
            end
        end
    end)
end

return State