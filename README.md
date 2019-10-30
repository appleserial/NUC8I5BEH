# NUC8I5BEH Hackintosh

![Hackintosh](test/neofetch.png)

### Specs

+ System: macOS Mojave 10.14.6 18G1012 x86_64 / Macmini8,1
+ Intel® Core™ i5-8259U Processor (6M Cache, up to 3.80 GHz)
+ SSD: 512GB [ADATA S11Pro NVME](https://union-click.jd.com/jdc?e=&p=AyIGZRprFQMTBlQeUhwDFABcKx9KWkxYZUIeUENQDEsFA1BWThgJBABAHUBZCQUdRUFGGRJDD1MdQlUQQwVKDFRXFk8jQA4SBlQaWhALGwZTHFIlUERQV1gbFHJ3BglDUmhCYXgWWQcLVB4LZRprFQMTB1MeXxwGEjdlG1wlVHwHVBpaFAMTAVUeaxQyEgNSEloWARMPVhhfETIVB1wrWxwBFQRWHV8VBhFpFCtrJQEiN2UbaxYyUGlVGlsWBBsDUh8PFwQXVwIaUxIEF1NSSQ9BBBQEAB1bFDIQBlQfUg%3D%3D)
+ RAM: 8GB x 2 [ADATA DDR4 2400](https://union-click.jd.com/jdc?e=&p=AyIGZRteEgYSAVEcWRQyEARSGV0RAxAFVR5rUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgVWHFkTBhMFVxteJUZOXRUcBEFXcl8NXxNSHBsHMEIPUnIeC2UaaxUDEwdTHl8cBhI3ZRtcJUN8B1QaWBEEEwFlGmsVBhUOVBhYFQoRAF0SaxICGzdVElgSAREBURtfFmxTN2UrWCUyIgdlGGtXbEdXBh5fQgEaAlJLDBAEFQ9cGAlFBkEPVUsMFQFCAldLaxcDEwNc)
+ Clover: Clover_v2.5k_r5070
+ BIOS: 0073

### What's working

+ Almost everything, Thunderbolt 3 hot swap is working. thanks Rashed97 for the patch
+ Wi-Fi & Bluetooth not working

### How to install

+ disable the Bluetooth/WiFi on the BIOS
+ disable __Secure Boot__
+ disable __Legacy Boot__
+ Create bootable USB with macOS Mojave
+ `git clone --depth https://github.com/csrutil/NUC8I5BEH`, copy EFI to your USB EFI folder
+ Change your mac serial number

### Cinebench

![Cinebench](test/cinebench.png)

### Tips

+ Change Host Name
	```
	sudo scutil --set HostName mini
	sudo scutil --set ComputerName mini
	sudo scutil --set LocalHostName mini
	```

+ Generate mac serial number https://chengxuxiaohei.cn/mac-sjsm.html

### credits

+ https://github.com/Rashed97/Intel-NUC-DSDT-Patch
