//computer object handling prototype

PrintFolders = function(path, computer)
    F = computer.File(path)
    folders = F.get_folders
    for folder in folders
        print(folder.name)
    end for
end function

PrintFiles = function(path, computer)
    F = computer.File(path)
    files = F.get_files
    for file in files
        print(file.name)
    end for
end function

FileContent = function(path, computer)
    F = computer.File(path)
    print(F.get_content)
end function

//while loop to handle input

HandleComputer = function(computer)
    while True
        path="/" 
        command = user_input("> : ")

        if command == "sf" then
            PrintFolders(path, computer)
        else if command == "s" then
            PrintFiles(path, computer)
        else if command == "help" then
            print("sf > show folders | s > show files | help | cd | cat")
        else if command == "cd" then
            path = user_input("Path : ")
        else if command == "cat" then
            filepath = user_input("provide the file path (complete) : ")
            FileContent(filepath, computer)
        else
            print("Please input valid command")
        end if
    end while
end function
