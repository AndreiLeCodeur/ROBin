metax = include_lib("/lib/metaxploit.so")

get_lib = function(ip, port)
    netsession = metax.net_use(ip,port)
    if netsession==null then
        print("Remote scan unsucessful")
        return null
    else
        return netsession.dump_lib
    end if
end function

remote_scan = function(ip, port)
    lib = get_lib(ip,port)
    if lib==null then
        return null
    else
        addresses = metax.scan(lib)
        dict = {}
        for address in addresses
            out_str = metax.scan_address(lib,address)
            vuls = out_str.matches("<b>(.*?)</b>")
            dict[address]=vuls
        end for
        return dict
    end if
end function

test_vuln = function(lib, address, vul)
    exploit = lib.overflow(lib, vul)
    if exploit==null then
        return null
    else if typeof(exploit)==null then
        return null
    else
        return typeof(exploit)
    end if
end function

dict_vuls = function(ip, port)
    lib = get_lib(ip,port)
    
    if lib==null then
        return null
    else
        
        dict = remote_scan(ip, port)
        out = {}
        i=0
        for adr in dict.indexes()
            for vul in dict[key]
                tmp = test_vuln(lib, adr, vul)
                if tmp != null then
                    dict[i]=[tmp,adr,vul]
                end if
            end for
        end for

        return dict
    end if

end function

print_vuls = function(dict)
    for index in dict.indexes()
        print(index+" | "+dict[index][0])
    end for
end function

test = function()
end function

