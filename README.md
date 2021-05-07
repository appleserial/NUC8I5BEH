# NUC8I5BEH Hackintosh

This is the hackintosh for the NUC8I5BEH

![Hackintosh](misc/ZmJlNmVkMTJj.png)

## SPECS
+ OS: macOS 11.1 20C69 x86_64 / Macmini8,1
+ OpenCore: 0.6.7
+ CPU: Intel® Core™ i5-8259U Processor (6M Cache, up to 3.80 GHz)
+ SSD: 512GB [TOSHIBA RC500 NVMe](https://union-click.jd.com/jdc?e=&p=JF8AAMoDIgZlGmsVAxMGVRhTEQURD1ArH0paTFhlQh5QQ1AMSwUDUFZOGA5OREdcThlVGloUAhEPURxYHQcNXhBHBiV0RWAqWwIWXHd_T04gQGsWAA9EJlRUHgtlGmsVAxMHUx5fHAYSN2UbXCVUfAdUGloXABQGUh1rFDISAFYaWR0DGwRdGFsSMhUHXCtbHAEVBFYdXxUGEWkUK2slASI3ZRtrFjJQaVRJDhcCFAFcSF4RVhcPAhgLRlBFBl1JWRcBElIFT1sSMhAGVB9S)
+ RAM: 8GB x 2 [ADATA DDR4 2400](https://union-click.jd.com/jdc?e=&p=JF8AAMoDIgZlGmsVAxMGVBpcFgUXBVwrH0paTFhlQh5QQ1AMSwUDUFZOGA5OREdcThlVGloUAxMAVhxeFwsNXhBHBiVEVnUhTicSXHdYHRpZd19aYA9gIBBEHgtlGmsVAxMHUx5fHAYSN2UbXCVUfAdUGloUAxMBVR5rFDISAFYaWR0DFAJWGFIRMhUHXCtbHAEVBFYdXxUGEWkUK2slASI3ZRtrFjJQaVNLXEFWQFMCHgkUABcCVUsLQVIXVVwdWxFQQVBQHAhBMhAGVB9S)
+ Monitor: [DELL](https://union-click.jd.com/jdc?e=&p=JF8AAMADIgZlGmsTCxIDUx1aJUZNXwtEa0xHV0YXEEULWldTCQQAQB1AWQkFXRwCFgFTGkRMR05aZQEkUVhEdShcOGV4T1cFelhIBVVTM11XGTITN1UaWhUEFwNcH1slMhIAZU01FQMTBlQTXhQEFzdUK1sSARMFXRpdHQYaD1UrXBULIgdcGFwWARQDVR9Ye0MiN2UYayUyEjdWKxl7B0IGVRtaRlYRD1QeXkFQElcGH14RUBYFV0sPHQoaAFYrWRQDFg4)

## TELEGRAM
Please join Telegram [Join Telegram](https://t.me/hackintash), if you have any questions


## BIOS
+ Disable __Secure Boot__
+ Enable __Legacy Boot__
+ Disable __Wi-Fi and Bluetooth__


## Q&A

Soldered Wi-Fi and Bluetooth are not stable yet, will integrate later🍻. Please enable the USBInjectAll.kext and disable the USBPorts.kext on the Config.plist if you get some USB issues.

## Donating 💸

- Feel free to [Buy Me a Coffee](https://www.buymeacoffee.com/csrutil)
- `XMR 4APxe9PpCgw2RdZjkiBqVk6mdyforWiQvGHGCXp6iWojTZaqmfuKcAgBEXTkshDLwo6zGu5yNVUBriyVuUV8jUr58nnkexR`
- `BTC bc1q7ryvvxuws4vhhuxpaddl82seq7ue03qq2p40qh`

## CINEBENCH
![Cinebench](misc/cinebench.png)

## macOS Tips

```
# https://gist.github.com/csrutil/b2cce932dda8b226f37be2880215aee6
sudo pmset -c sleep 30
sudo pmset -c displaysleep 30
sudo pmset -c disksleep 30
sudo pmset -c hibernatemode 0
sudo pmset -c standby 0
sudo pmset -c autopoweroff 0
sudo pmset -c tcpkeepalive 1

# disable the Spotlight indexes
sudo mdutil -a -i off

# change host name
sudo scutil --set HostName mini
sudo scutil --set ComputerName mini
sudo scutil --set LocalHostName mini

sudo spctl --master-disable
```

## CREDITS
- https://github.com/Sniki/OS-X-USB-Inject-All
- [acidanthera](https://github.com/acidanthera/OpenCorePkg)
- [OpenIntelWireless](https://github.com/OpenIntelWireless/itlwm)
- https://github.com/Rashed97/Intel-NUC-DSDT-Patch
- https://github.com/Rashed97/Intel-NUC-DSDT-Patch/commit/47476815b52f8e4c97e8f85df158c9ab1b6ecedd
- https://github.com/sarkrui/NUC8i7BEH-Hackintosh-Build
