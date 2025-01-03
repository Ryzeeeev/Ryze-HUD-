-- Toggle UI Command
RegisterCommand('toggleui', function()
    State.display = not State.display
    SetNuiFocus(State.display, State.display)
    SendNUIMessage({
        type = 'toggleUI',
        data = State.display
    })
end)