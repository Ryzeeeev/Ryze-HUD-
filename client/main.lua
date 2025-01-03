local function Initialize()
    -- Initial state setup
    Citizen.CreateThread(function()
        while not NetworkIsPlayerActive(PlayerId()) do
            Citizen.Wait(0)
        end
        
        -- Request initial data from server
        TriggerServerEvent('gameui:requestInitialData')
        
        -- Setup display
        State.display = false
        SetNuiFocus(false, false)
    end)
end

Initialize()

function Round(value, numDecimalPlaces)
	if numDecimalPlaces then
		local power = 10^numDecimalPlaces
		return math.floor((value * power) + 0.5) / (power)
	else
		return math.floor(value + 0.5)
	end
end

local directions = {
    [0] = "Nord",
    [1] = "Nord-Ouest",
    [2] = "Ouest",
    [3] = "Sud-Ouest",
    [4] = "Sud",
    [5] = "Sud-Est",
    [6] = "Est",
    [7] = "Nord-Est",
    [8] = "Nord"
}

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)
        if State.playerData then
            State.playerData.stamina = GetPlayerStamina(PlayerId())
            State.playerData.health = GetEntityHealth(PlayerPedId()) / 2
            State.playerData.armor = GetPedArmour(PlayerPedId())


            local PPos = GetEntityCoords(PlayerPedId())
            local streetHash = GetStreetNameAtCoord(PPos.x, PPos.y, PPos.z)
            local streetName = GetStreetNameFromHashKey(streetHash)

            State.updateLocation({
                heading = directions[math.floor((GetEntityHeading(PlayerPedId()) + 22.5) / 45.0)],
                name = streetName
            })

            local bank
            local money

            if PlayerData then
                for i=1, #PlayerData.accounts, 1 do
                    if PlayerData.accounts[i].name == 'black_money' then
                        blackMoney = PlayerData.accounts[i].money
                    elseif PlayerData.accounts[i].name == 'bank' then
                        bank = PlayerData.accounts[i].money
                    elseif PlayerData.accounts[i].name == 'money' then
                        money = PlayerData.accounts[i].money
                    end
                end
            end

            State.playerData.money = money
            State.playerData.bank = bank


            State.UpdatePlayerData(State.playerData)
        end
    end
end)