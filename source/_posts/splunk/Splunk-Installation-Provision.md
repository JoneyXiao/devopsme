# [Start Using Splunk](https://www.splunk.com/en_us/download.html)

> Please sign up a new splunk account if you don't have yet.

- Splunk Cloud Platform Free Trial
- Splunk Enterprise Free Trial
- Universal Forwarder

# Forwarding Data into Splunk Cloud Platform - Windows Forwarder

1. On the Splunk Cloud Platform search head(login with your username and password), click on Universal Forwarder to download the UF credentials package
2. Copy the UF credentials package file (.spl) to the machine from which you intend to forward data, it's used to connect forwarder to Splunk Cloud Instances
3. On the same machine, go to Splunk.com and download the universal forwarder and run the installer package (.msi)
4. On the Wizard set up screen, accept the license agreement and select “A Splunk Cloud instance”
5. Click “Customize Options” and make sure you run the UF as a Local System account, domain account for production environment
6. On the Credentials screen, uncheck “Generate random password.” Manually put in an administration username and password. The Splunk credentials package will need this information
7. Skip the Deployment server screen and select “Install” on the final screen, this will install the Splunk universal forwarder in `c:\Program Files\Splunkuniversalforwarder\`
8. Open an elevated command prompt by typing `cmd` into the search bar, right click on “Command Prompt” and select “Run as administrator”
9. Go to the Splunk home directory, in this case you will type `cd Program Files\Splunkuniversalforwarder\bin`
10. Install the Splunk UF credentials package `splunk.exe install app c:\users\<user name>\downloads\splunkclouduf.spl`
11. Restart the Splunk forwarder `splunk.exe restart`
12. Go to the Splunk Cloud Platform "Search & Reporting" page, type `index=*` in the search bar, click on the "Search" button

[Relevant Splunk Doc](https://docs.splunk.com/Documentation/Forwarder/9.2.1/Forwarder/ConfigSCUFCredentials)

# Forwarding Data into Splunk Enterprise

## Forwarding Data into Splunk Linux(Search Head/Indexer)

### Installing Splunk Enterprise(Search Head/Indexer) on Linux

1. Visit Splunk.com and click on “Free Splunk.” Log in with your account or create a new one
2. Click “Free Trials and Downloads”
3. Under “Splunk Enterpise” select “Get my free trial”
4. Select the Linux tab
5. Select “copy wget link” for the `.tgz` file
6. Paste the wget string into your Linux command line, adding sudo before it, e.g. `sudo wget –O …`
7. Check whether the file was successfully downloaded using the `ls` command
8. The default Splunk home directory is `/opt/splunk`, so let’s untar the file into the opt directory. We can do this with one command `sudo tar xvzf <splunk_package_name.tgz> -C /opt`
9. Go to the Splunk home directory `cd /opt/splunk/bin`
10. Start Splunk for the first time `sudo ./splunk start --accept-license`, `--accept-license` is used to accept the license agreement
11. Create a username and password as prompted
12. Wait for the web server to be online, get the IP address of this machine, and visit your Splunk search head web interface at https://<ip-address>:8000

[Relevant Splunk Doc](https://docs.splunk.com/Documentation/Splunk/9.2.1/Installation/InstallonLinux)

### Splunk Linux Universal Forwarder

> Don't install a forwarder on the same machine as search head or indexer.

1. Visit Splunk.com and click on “Free Splunk.” Log in with your account or create a new one
2. Click “Free Trials and Downloads”
3. Under “Splunk universal forwarder” select “Get my free download”
4. Select the Linux tab
5. Select “copy wget link” for the `.tgz` file for the correct version of Linux
6. Create the least privileged user and group(security), both named splunkfwd `sudo useradd –m splunkfwd`, list all groups using `getent group`
7. Navigate to `/opt`
8. Paste the wget string into your Linux command line, adding sudo before it `sudo wget –O …`
9. Check whether the file was successfully downloaded using the `ls` command
10. Untar the `.tgz` file `sudo tar xvzf <splunk_package_name.tgz>`
11. Go to the Splunk forwarder home directory: `cd /opt/splunkforwarder`
12. Give the least privileged user and group access to the Splunk home directory `sudo chown –R splunkfwd:splunkfwd /opt/splunkforwarder`
13. Start Splunk for the first time
    - Move to the `/bin` directory (`cd /bin`)
    - `sudo ./splunk start --accept-license`
14. Create a username and password as prompted
15. Configure receiving on the search head(Splunk Enterprise instance - search head & indexer combo ), in a distributed environment, you would do this on the indexer
    - Settings -> Forwarding and receiving -> Configure receiving -> New receiving port
    - Enter the default port of 9997
16. Restart the search head: Settings -> Server Controls -> Restart Splunk
17. Stop the forwarder `sudo ./splunk stop`
18. Run the boot-start script `sudo ./splunk enable boot-start`
19. Add the indexer/search head as the target `sudo ./splunk add forward-server <ip address>:<port>`, check the forwarder server by typing `sudo ./splunk list foward-server`
20. Add a data monitor to forward `sudo ./splunk add monitor /var/log`
21. Go back to the Splunk search head/indexer -> Searching & Reporting(app) -> type `index=*` in the search bar

[Relevant Splunk Doc](https://docs.splunk.com/Documentation/Forwarder/latest/Forwarder/Installanixuniversalforwarder)

## Forwarding Data into Splunk Windows(Search Head/Indexer)

### Splunk Windows Universal Forwarder

> Installing Splunk Enterprise(Search Head/Indexer) on Windows is skipped as it's very easy to setup using the wizard installer.

1. Set up receiving on the search head/indexer: Settings -> Forwarding and receiving -> Configure receiving -> New receiving port -> 9997
2. Open port 9997 for incoming traffic on the Windows firewall
    - Search “firewall” and click on Windows Defender Firewall
    - Select Advanced settings
    - Select Inbound Rules
    - Select New Rule
        - Select Port -> Next
        - Select TCP -> Specific local ports: 9997 -> Next
        - Select Allow the connection -> Next
        - Select all: Domain, Private, Public -> Next
        - Name the firewall rule -> Finish
3. Restart the Splunk search head/indexer, Settings -> Server controls -> Restart Splunk
4. On the Windows machine from which you intend to forward data, go to Splunk.com and log in
5. Click Free Trials and Downloads
6. Scroll down to Universal Forwarder
7. Select Get My Free Download, On the Windows tab, select Download Now for your version of Windows (I will not be using wget for Windows)
8. Run the .msi installer
9. In the installation wizard, check the box to accept the license agreement, select “An on-premises Splunk Enterprise instance” and click “Customize Options”
10. Skip the default directory and SSL certificate screens
11. Select Local System (the default is “Virtual Account,” but for this class we will run it as Local System) -> Next
12. Check at least one box under Windows Event Logs (I checked them all) -> Next
13. Create a username and password
14. Skip the Deployment Server screen -> Next
15. Type in the IP address and port of the search head/indexer
16. Click Install, then Finish
17. Go back to the Splunk search head/indexer -> Searching & Reporting(app) -> type `index=*` in the search bar
