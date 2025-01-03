Utils = {}

function Utils.FormatMoney(amount)
    return '$' .. Utils.CommaValue(amount)
end

function Utils.CommaValue(amount)
    local formatted = tostring(amount)
    while true do  
        formatted, k = string.gsub(formatted, "^(-?%d+)(%d%d%d)", '%1,%2')
        if (k==0) then
            break
        end
    end
    return formatted
end