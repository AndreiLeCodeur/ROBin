HandleShell = function(shell)
    inp = user_input("> ")
    if inp == "scp" then
        to_send = input("Path to file : ")
        where = input("inport path : ")
        get_shell.scp(to_send, where, shell)
    else if inp == "co" then
        shell.start_terminal
    else
        print("scp to send files | co to connect")
    end if
end function;