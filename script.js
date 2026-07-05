const commands = [
      {
        system: "Windows",
        category: "Erstdiagnose",
        title: "Computername anzeigen",
        description: "Zeigt den Gerätenamen des aktuellen Windows-Systems an.",
        command: "hostname",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["diagnose", "hostname", "inventar"]
      },
      {
        system: "Windows",
        category: "Erstdiagnose",
        title: "Aktuellen Benutzer anzeigen",
        description: "Zeigt an, mit welchem Benutzerkonto die aktuelle Sitzung läuft.",
        command: "whoami",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["diagnose", "benutzer", "rechte"]
      },
      {
        system: "Windows",
        category: "Erstdiagnose",
        title: "Systeminformationen anzeigen",
        description: "Zeigt Hardware-, BIOS-, Windows- und Patchinformationen an.",
        command: "systeminfo",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["inventar", "version", "hardware"]
      },
      {
        system: "Windows",
        category: "Erstdiagnose",
        title: "ComputerInfo per PowerShell",
        description: "Liefert umfangreiche Informationen zu Betriebssystem, Hardware und Installation.",
        command: "Get-ComputerInfo",
        shell: "PowerShell",
        risk: "safe",
        tags: ["inventar", "powershell", "system"]
      },
      {
        system: "Windows",
        category: "Systemprüfung",
        title: "Systemdateien prüfen",
        description: "Prüft geschützte Windows-Systemdateien und repariert erkannte Fehler automatisch.",
        command: "sfc /scannow",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["wartung", "systemdateien", "reparatur"]
      },
      {
        system: "Windows",
        category: "Systemprüfung",
        title: "Komponentenstore prüfen",
        description: "Prüft, ob der Windows-Komponentenstore beschädigt ist.",
        command: "DISM /Online /Cleanup-Image /CheckHealth",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["dism", "systemprüfung", "komponentenstore"]
      },
      {
        system: "Windows",
        category: "Systemprüfung",
        title: "Komponentenstore scannen",
        description: "Führt eine genauere Prüfung des Windows-Komponentenstores durch.",
        command: "DISM /Online /Cleanup-Image /ScanHealth",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["dism", "systemprüfung", "scan"]
      },
      {
        system: "Windows",
        category: "Systemprüfung",
        title: "Windows-Komponentenstore reparieren",
        description: "Repariert den Windows-Komponentenstore, hilfreich bei Update- oder SFC-Problemen.",
        command: "DISM /Online /Cleanup-Image /RestoreHealth",
        shell: "PowerShell / CMD als Administrator",
        risk: "warning",
        tags: ["dism", "update", "reparatur"]
      },
      {
        system: "Windows",
        category: "Updates",
        title: "Windows Update Scan starten",
        description: "Startet eine Suche nach verfügbaren Windows-Updates.",
        command: "UsoClient StartScan",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["windows update", "scan", "updates"]
      },
      {
        system: "Windows",
        category: "Updates",
        title: "Windows Update Download starten",
        description: "Startet den Download gefundener Windows-Updates.",
        command: "UsoClient StartDownload",
        shell: "PowerShell / CMD",
        risk: "warning",
        tags: ["windows update", "download", "updates"]
      },
      {
        system: "Windows",
        category: "Updates",
        title: "Windows Update Installation starten",
        description: "Startet die Installation verfügbarer Windows-Updates.",
        command: "UsoClient StartInstall",
        shell: "PowerShell / CMD",
        risk: "warning",
        tags: ["windows update", "installation", "updates"]
      },
      {
        system: "Windows",
        category: "Updates",
        title: "Winget-Pakete anzeigen",
        description: "Zeigt verfügbare Updates für über winget erkannte Programme an.",
        command: "winget upgrade",
        shell: "PowerShell",
        risk: "safe",
        tags: ["winget", "software", "update"]
      },
      {
        system: "Windows",
        category: "Updates",
        title: "Winget-Pakete aktualisieren",
        description: "Aktualisiert installierte Programme, die über winget erkannt werden.",
        command: "winget upgrade --all",
        shell: "PowerShell",
        risk: "warning",
        tags: ["winget", "software", "update"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "IP-Konfiguration anzeigen",
        description: "Zeigt Netzwerkadapter, IP-Adressen, Gateway und DNS-Informationen an.",
        command: "ipconfig /all",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["netzwerk", "ip", "dns"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "DNS-Cache leeren",
        description: "Leert den lokalen DNS-Cache, hilfreich bei Namensauflösungsproblemen.",
        command: "ipconfig /flushdns",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["dns", "cache", "netzwerk"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "TCP-Verbindung testen",
        description: "Prüft, ob ein Host auf einem bestimmten Port erreichbar ist.",
        command: "Test-NetConnection google.com -Port 443",
        shell: "PowerShell",
        risk: "safe",
        tags: ["netzwerk", "port", "test"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "Route verfolgen",
        description: "Zeigt den Netzwerkpfad zu einem Zielhost an.",
        command: "tracert google.com",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["netzwerk", "route", "traceroute"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "Winsock zurücksetzen",
        description: "Setzt den Winsock-Katalog zurück. Hilfreich bei hartnäckigen Netzwerkproblemen; Neustart empfohlen.",
        command: "netsh winsock reset",
        shell: "PowerShell / CMD als Administrator",
        risk: "warning",
        tags: ["netzwerk", "winsock", "reset"]
      },
      {
        system: "Windows",
        category: "Netzwerk",
        title: "TCP/IP zurücksetzen",
        description: "Setzt den TCP/IP-Stack zurück. Danach ist meistens ein Neustart sinnvoll.",
        command: "netsh int ip reset",
        shell: "PowerShell / CMD als Administrator",
        risk: "warning",
        tags: ["netzwerk", "tcpip", "reset"]
      },
      {
        system: "Windows",
        category: "Datenträger",
        title: "Datenträger online prüfen",
        description: "Prüft Laufwerk C: online auf Dateisystemfehler, ohne sofort eine Reparatur zu erzwingen.",
        command: "chkdsk C: /scan",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["festplatte", "ssd", "dateisystem"]
      },
      {
        system: "Windows",
        category: "Datenträger",
        title: "Datenträger reparieren",
        description: "Prüft und repariert Laufwerk C:. Kann je nach Zustand einen Neustart und längere Laufzeit erfordern.",
        command: "chkdsk C: /f /r",
        shell: "PowerShell / CMD als Administrator",
        risk: "warning",
        tags: ["festplatte", "ssd", "reparatur"]
      },
      {
        system: "Windows",
        category: "Datenträger",
        title: "Volumes anzeigen",
        description: "Zeigt Laufwerke, Dateisysteme, Größen und freie Kapazitäten an.",
        command: "Get-Volume",
        shell: "PowerShell",
        risk: "safe",
        tags: ["volume", "speicher", "laufwerke"]
      },
      {
        system: "Windows",
        category: "Datenträger",
        title: "Physische Datenträger anzeigen",
        description: "Zeigt Informationen zu physischen Datenträgern und deren Gesundheitsstatus an.",
        command: "Get-PhysicalDisk",
        shell: "PowerShell",
        risk: "safe",
        tags: ["disk", "hardware", "health"]
      },
      {
        system: "Windows",
        category: "Datenträger",
        title: "Laufwerk analysieren",
        description: "Analysiert, ob eine Optimierung des Laufwerks C: sinnvoll ist.",
        command: "Optimize-Volume -DriveLetter C -Analyze",
        shell: "PowerShell als Administrator",
        risk: "safe",
        tags: ["optimierung", "ssd", "defrag"]
      },
      {
        system: "Windows",
        category: "Energie",
        title: "Akkubericht erstellen",
        description: "Erstellt einen HTML-Bericht zur Akkugesundheit und Nutzungshistorie.",
        command: "powercfg /batteryreport",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["akku", "battery", "notebook"]
      },
      {
        system: "Windows",
        category: "Energie",
        title: "Energieanalyse erstellen",
        description: "Analysiert Energieeinstellungen und erstellt einen Bericht zu Energieproblemen.",
        command: "powercfg /energy",
        shell: "PowerShell / CMD als Administrator",
        risk: "safe",
        tags: ["energie", "analyse", "bericht"]
      },
      {
        system: "Windows",
        category: "Benutzer & Rechte",
        title: "Lokale Benutzer anzeigen",
        description: "Listet lokale Benutzerkonten auf.",
        command: "net user",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["benutzer", "konten", "lokal"]
      },
      {
        system: "Windows",
        category: "Benutzer & Rechte",
        title: "Lokale Administratoren anzeigen",
        description: "Zeigt Mitglieder der lokalen Administratorengruppe an.",
        command: "net localgroup administrators",
        shell: "PowerShell / CMD",
        risk: "safe",
        tags: ["administratoren", "rechte", "gruppen"]
      },
      {
        system: "Windows",
        category: "Dienste & Prozesse",
        title: "CPU-lastige Prozesse anzeigen",
        description: "Zeigt die zehn Prozesse mit der höchsten CPU-Zeit an.",
        command: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10",
        shell: "PowerShell",
        risk: "safe",
        tags: ["prozesse", "cpu", "leistung"]
      },
      {
        system: "Windows",
        category: "Dienste & Prozesse",
        title: "Laufende Dienste anzeigen",
        description: "Listet alle aktuell laufenden Windows-Dienste.",
        command: "Get-Service | Where-Object {$_.Status -eq \"Running\"}",
        shell: "PowerShell",
        risk: "safe",
        tags: ["dienste", "services", "status"]
      },
      {
        system: "Windows",
        category: "Dienste & Prozesse",
        title: "Druckwarteschlange neu starten",
        description: "Startet den Druckwarteschlangen-Dienst neu, hilfreich bei Druckproblemen.",
        command: "Restart-Service -Name spooler",
        shell: "PowerShell als Administrator",
        risk: "warning",
        tags: ["drucker", "spooler", "dienst"]
      },
      {
        system: "Windows",
        category: "Logs",
        title: "Systemereignisse anzeigen",
        description: "Zeigt die neuesten Einträge aus dem klassischen System-Eventlog.",
        command: "Get-EventLog -LogName System -Newest 50",
        shell: "PowerShell",
        risk: "safe",
        tags: ["eventlog", "system", "logs"]
      },
      {
        system: "Windows",
        category: "Logs",
        title: "System-Events mit WinEvent",
        description: "Zeigt die neuesten Systemereignisse über die moderne WinEvent-Schnittstelle.",
        command: "Get-WinEvent -LogName System -MaxEvents 50",
        shell: "PowerShell",
        risk: "safe",
        tags: ["eventlog", "winevent", "logs"]
      },
      {
        system: "Windows",
        category: "Gefährliche Befehle",
        title: "Dateien rekursiv löschen",
        description: "Entfernt Dateien und Ordner rekursiv und ohne Rückfrage. Nur verwenden, wenn Zielpfad absolut eindeutig ist.",
        command: "Remove-Item -Path \"C:\\Pfad\\Zum\\Ordner\" -Recurse -Force",
        shell: "PowerShell als Administrator",
        risk: "danger",
        tags: ["löschen", "danger", "remove"]
      },
      {
        system: "Linux",
        category: "Erstdiagnose",
        title: "Kernel und System anzeigen",
        description: "Zeigt Kernel-Version und Systemarchitektur an.",
        command: "uname -a",
        shell: "Bash",
        risk: "safe",
        tags: ["diagnose", "kernel", "linux"]
      },
      {
        system: "Linux",
        category: "Erstdiagnose",
        title: "Distribution anzeigen",
        description: "Zeigt Informationen zur Linux-Distribution an, sofern lsb_release installiert ist.",
        command: "lsb_release -a",
        shell: "Bash",
        risk: "safe",
        tags: ["distribution", "version", "diagnose"]
      },
      {
        system: "Linux",
        category: "Erstdiagnose",
        title: "Hostname und OS anzeigen",
        description: "Zeigt Hostname, Betriebssystem, Kernel und Virtualisierung an.",
        command: "hostnamectl",
        shell: "Bash",
        risk: "safe",
        tags: ["hostname", "system", "inventar"]
      },
      {
        system: "Linux",
        category: "Erstdiagnose",
        title: "Laufzeit anzeigen",
        description: "Zeigt Uptime, Benutzer und Load Average an.",
        command: "uptime",
        shell: "Bash",
        risk: "safe",
        tags: ["uptime", "load", "diagnose"]
      },
      {
        system: "Linux",
        category: "Systemprüfung",
        title: "Arbeitsspeicher anzeigen",
        description: "Zeigt RAM- und Swap-Nutzung in lesbarer Form an.",
        command: "free -h",
        shell: "Bash",
        risk: "safe",
        tags: ["ram", "speicher", "swap"]
      },
      {
        system: "Linux",
        category: "Systemprüfung",
        title: "Speicherplatz prüfen",
        description: "Zeigt belegten und freien Speicherplatz aller eingebundenen Dateisysteme an.",
        command: "df -h",
        shell: "Bash",
        risk: "safe",
        tags: ["speicher", "disk", "filesystem"]
      },
      {
        system: "Linux",
        category: "Systemprüfung",
        title: "Größte Ordner finden",
        description: "Zeigt große Ordner im aktuellen Pfad an. Hilfreich bei volllaufenden Servern.",
        command: "sudo du -h --max-depth=1 | sort -hr | head -20",
        shell: "Bash",
        risk: "safe",
        tags: ["speicher", "du", "analyse"]
      },
      {
        system: "Linux",
        category: "Updates",
        title: "Debian/Ubuntu aktualisieren",
        description: "Aktualisiert Paketlisten und installiert verfügbare Updates.",
        command: "sudo apt update && sudo apt upgrade -y",
        shell: "Bash",
        risk: "warning",
        tags: ["apt", "ubuntu", "debian", "update"]
      },
      {
        system: "Linux",
        category: "Updates",
        title: "Debian/Ubuntu aufräumen",
        description: "Entfernt nicht mehr benötigte Pakete unter Debian/Ubuntu.",
        command: "sudo apt autoremove -y",
        shell: "Bash",
        risk: "warning",
        tags: ["apt", "cleanup", "autoremove"]
      },
      {
        system: "Linux",
        category: "Updates",
        title: "Fedora/RHEL aktualisieren",
        description: "Aktualisiert Pakete auf Systemen mit dnf.",
        command: "sudo dnf update -y",
        shell: "Bash",
        risk: "warning",
        tags: ["dnf", "fedora", "rhel", "update"]
      },
      {
        system: "Linux",
        category: "Updates",
        title: "Arch Linux aktualisieren",
        description: "Aktualisiert ein Arch-basiertes System über pacman.",
        command: "sudo pacman -Syu",
        shell: "Bash",
        risk: "warning",
        tags: ["pacman", "arch", "update"]
      },
      {
        system: "Linux",
        category: "Dienste & Prozesse",
        title: "Fehlgeschlagene Dienste anzeigen",
        description: "Listet systemd-Dienste, die aktuell im Fehlerzustand sind.",
        command: "systemctl --failed",
        shell: "Bash",
        risk: "safe",
        tags: ["systemd", "dienste", "fehler"]
      },
      {
        system: "Linux",
        category: "Dienste & Prozesse",
        title: "Dienststatus prüfen",
        description: "Zeigt Status, Logs und Prozessinformationen eines Dienstes an. Dienstnamen anpassen.",
        command: "systemctl status ssh",
        shell: "Bash",
        risk: "safe",
        tags: ["systemd", "ssh", "status"]
      },
      {
        system: "Linux",
        category: "Dienste & Prozesse",
        title: "Dienst neu starten",
        description: "Startet einen Dienst neu. Dienstnamen vorher prüfen und anpassen.",
        command: "sudo systemctl restart ssh",
        shell: "Bash",
        risk: "warning",
        tags: ["systemd", "restart", "dienst"]
      },
      {
        system: "Linux",
        category: "Dienste & Prozesse",
        title: "Top-Prozesse CPU",
        description: "Zeigt Prozesse sortiert nach CPU-Auslastung an.",
        command: "ps aux --sort=-%cpu | head",
        shell: "Bash",
        risk: "safe",
        tags: ["prozesse", "cpu", "leistung"]
      },
      {
        system: "Linux",
        category: "Dienste & Prozesse",
        title: "Top-Prozesse RAM",
        description: "Zeigt Prozesse sortiert nach Arbeitsspeicherverbrauch an.",
        command: "ps aux --sort=-%mem | head",
        shell: "Bash",
        risk: "safe",
        tags: ["prozesse", "ram", "leistung"]
      },
      {
        system: "Linux",
        category: "Logs",
        title: "Systemjournal live verfolgen",
        description: "Zeigt aktuelle Systemmeldungen live an.",
        command: "sudo journalctl -f",
        shell: "Bash",
        risk: "safe",
        tags: ["logs", "journalctl", "debug"]
      },
      {
        system: "Linux",
        category: "Logs",
        title: "Fehler seit Boot anzeigen",
        description: "Zeigt Fehler aus dem aktuellen Bootvorgang an.",
        command: "journalctl -p err -b",
        shell: "Bash",
        risk: "safe",
        tags: ["logs", "fehler", "boot"]
      },
      {
        system: "Linux",
        category: "Logs",
        title: "Kernelmeldungen anzeigen",
        description: "Zeigt Kernelmeldungen mit lesbaren Zeitstempeln an.",
        command: "dmesg -T",
        shell: "Bash",
        risk: "safe",
        tags: ["kernel", "logs", "hardware"]
      },
      {
        system: "Linux",
        category: "Netzwerk",
        title: "IP-Adressen anzeigen",
        description: "Zeigt Netzwerkinterfaces und IP-Adressen an.",
        command: "ip a",
        shell: "Bash",
        risk: "safe",
        tags: ["netzwerk", "ip", "interfaces"]
      },
      {
        system: "Linux",
        category: "Netzwerk",
        title: "Routingtabelle anzeigen",
        description: "Zeigt Standardgateway und Routingregeln an.",
        command: "ip r",
        shell: "Bash",
        risk: "safe",
        tags: ["netzwerk", "route", "gateway"]
      },
      {
        system: "Linux",
        category: "Netzwerk",
        title: "Offene Ports anzeigen",
        description: "Zeigt lauschende TCP- und UDP-Ports mit Prozessen an.",
        command: "sudo ss -tulpn",
        shell: "Bash",
        risk: "safe",
        tags: ["ports", "netzwerk", "dienste"]
      },
      {
        system: "Linux",
        category: "Netzwerk",
        title: "DNS-Auflösung testen",
        description: "Prüft die DNS-Auflösung eines Hostnamens.",
        command: "dig google.com",
        shell: "Bash",
        risk: "safe",
        tags: ["dns", "netzwerk", "test"]
      },
      {
        system: "Linux",
        category: "Netzwerk",
        title: "Route verfolgen",
        description: "Zeigt den Netzwerkpfad zu einem Zielhost an.",
        command: "traceroute google.com",
        shell: "Bash",
        risk: "safe",
        tags: ["traceroute", "route", "netzwerk"]
      },
      {
        system: "Linux",
        category: "Security",
        title: "UFW-Status anzeigen",
        description: "Zeigt Firewallstatus und aktive Regeln bei UFW an.",
        command: "sudo ufw status verbose",
        shell: "Bash",
        risk: "safe",
        tags: ["firewall", "ufw", "security"]
      },
      {
        system: "Linux",
        category: "Security",
        title: "SSH in UFW erlauben",
        description: "Erlaubt eingehende SSH-Verbindungen über Port 22. Nur aktivieren, wenn SSH gewünscht ist.",
        command: "sudo ufw allow 22/tcp",
        shell: "Bash",
        risk: "warning",
        tags: ["firewall", "ssh", "ufw"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Laufende Container anzeigen",
        description: "Listet aktuell laufende Docker-Container auf.",
        command: "docker ps",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "container", "status"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Alle Container anzeigen",
        description: "Listet laufende und gestoppte Docker-Container auf.",
        command: "docker ps -a",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "container", "status"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Container-Logs anzeigen",
        description: "Zeigt Logs eines Containers. Containername oder ID anpassen.",
        command: "docker logs <container>",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "logs", "container"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Compose-Status anzeigen",
        description: "Zeigt den Status der Container eines Docker-Compose-Projekts an.",
        command: "docker compose ps",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "compose", "status"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Compose-Logs live verfolgen",
        description: "Zeigt Live-Logs eines Docker-Compose-Projekts.",
        command: "docker compose logs -f",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "compose", "logs"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Docker-Speichernutzung anzeigen",
        description: "Zeigt, wie viel Speicher Images, Container, Volumes und Build-Cache belegen.",
        command: "docker system df",
        shell: "Bash",
        risk: "safe",
        tags: ["docker", "speicher", "analyse"]
      },
      {
        system: "Linux",
        category: "Docker",
        title: "Docker-Speicher bereinigen",
        description: "Entfernt ungenutzte Docker-Objekte. Achtung: nicht verwendete Images/Container/Netzwerke werden gelöscht.",
        command: "docker system prune -a",
        shell: "Bash",
        risk: "danger",
        tags: ["docker", "cleanup", "speicher"]
      },
      {
        system: "Linux",
        category: "Gefährliche Befehle",
        title: "Rekursiv löschen",
        description: "Löscht rekursiv und ohne Papierkorb. Nur mit eindeutig geprüftem Zielpfad verwenden.",
        command: "rm -rf /pfad/zum/ziel",
        shell: "Bash",
        risk: "danger",
        tags: ["löschen", "danger", "rm"]
      },
      {
        system: "Linux",
        category: "Gefährliche Befehle",
        title: "Sofort neu starten",
        description: "Startet das System sofort neu. Vorher laufende Dienste und Nutzer prüfen.",
        command: "sudo reboot",
        shell: "Bash",
        risk: "danger",
        tags: ["reboot", "neustart", "server"]
      },
      {
        system: "Linux",
        category: "Gefährliche Befehle",
        title: "Sofort herunterfahren",
        description: "Fährt das System sofort herunter. Besonders bei Servern vorher kritisch prüfen.",
        command: "sudo shutdown now",
        shell: "Bash",
        risk: "danger",
        tags: ["shutdown", "ausschalten", "server"]
      },
      {
        system: "macOS",
        category: "Erstdiagnose",
        title: "macOS-Version anzeigen",
        description: "Zeigt Version und Buildnummer von macOS an.",
        command: "sw_vers",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["version", "macos", "info"]
      },
      {
        system: "macOS",
        category: "Erstdiagnose",
        title: "Softwaredaten anzeigen",
        description: "Zeigt ausführliche Informationen zur macOS-Softwareumgebung.",
        command: "system_profiler SPSoftwareDataType",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["macos", "system_profiler", "software"]
      },
      {
        system: "macOS",
        category: "Erstdiagnose",
        title: "Hardwaredaten anzeigen",
        description: "Zeigt Modell, Chip/CPU, Speicher und Serieninformationen an.",
        command: "system_profiler SPHardwareDataType",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["macos", "hardware", "inventar"]
      },
      {
        system: "macOS",
        category: "Updates",
        title: "macOS-Updates suchen",
        description: "Listet verfügbare macOS-Systemupdates auf.",
        command: "softwareupdate -l",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["macos", "softwareupdate", "updates"]
      },
      {
        system: "macOS",
        category: "Updates",
        title: "macOS-Updates installieren",
        description: "Installiert verfügbare macOS-Updates. Neustart kann erforderlich sein.",
        command: "sudo softwareupdate -i -a",
        shell: "Terminal / zsh",
        risk: "warning",
        tags: ["macos", "softwareupdate", "installation"]
      },
      {
        system: "macOS",
        category: "Updates",
        title: "Homebrew prüfen",
        description: "Prüft die Homebrew-Installation auf häufige Probleme.",
        command: "brew doctor",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["homebrew", "brew", "diagnose"]
      },
      {
        system: "macOS",
        category: "Updates",
        title: "Homebrew aktualisieren",
        description: "Aktualisiert Homebrew, installierte Pakete und entfernt alte Versionen.",
        command: "brew update && brew upgrade && brew cleanup",
        shell: "Terminal / zsh",
        risk: "warning",
        tags: ["homebrew", "brew", "update"]
      },
      {
        system: "macOS",
        category: "Netzwerk",
        title: "Netzwerkinterfaces anzeigen",
        description: "Zeigt Netzwerkschnittstellen und deren Konfiguration an.",
        command: "ifconfig",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["netzwerk", "interfaces", "ip"]
      },
      {
        system: "macOS",
        category: "Netzwerk",
        title: "Hardwareports anzeigen",
        description: "Zeigt macOS-Netzwerkdienste und zugehörige Geräteports an.",
        command: "networksetup -listallhardwareports",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["netzwerk", "hardwareports", "wifi"]
      },
      {
        system: "macOS",
        category: "Netzwerk",
        title: "DNS-Konfiguration anzeigen",
        description: "Zeigt die aktuell verwendeten DNS-Resolver und Suchdomains an.",
        command: "scutil --dns",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["dns", "resolver", "netzwerk"]
      },
      {
        system: "macOS",
        category: "Netzwerk",
        title: "DNS-Cache leeren",
        description: "Leert den DNS-Cache von macOS.",
        command: "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["dns", "cache", "netzwerk"]
      },
      {
        system: "macOS",
        category: "Datenträger",
        title: "Speicherplatz anzeigen",
        description: "Zeigt Speicherbelegung der Dateisysteme an.",
        command: "df -h",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["speicher", "disk", "ssd"]
      },
      {
        system: "macOS",
        category: "Datenträger",
        title: "Ordnergrößen anzeigen",
        description: "Zeigt Größen der Ordner im aktuellen Verzeichnis an.",
        command: "du -sh *",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["speicher", "du", "analyse"]
      },
      {
        system: "macOS",
        category: "Dienste & Prozesse",
        title: "Top-Prozesse anzeigen",
        description: "Zeigt laufende Prozesse sortiert nach CPU-Auslastung an.",
        command: "top -o cpu",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["prozesse", "cpu", "leistung"]
      },
      {
        system: "macOS",
        category: "Dienste & Prozesse",
        title: "CPU-lastige Prozesse anzeigen",
        description: "Zeigt die Prozesse mit der höchsten CPU-Auslastung.",
        command: "ps aux | sort -nrk 3,3 | head",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["prozesse", "cpu", "terminal"]
      },
      {
        system: "macOS",
        category: "Dienste & Prozesse",
        title: "Launchd-Jobs anzeigen",
        description: "Listet aktive LaunchAgents und LaunchDaemons über launchctl.",
        command: "launchctl list",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["launchctl", "dienste", "macos"]
      },
      {
        system: "macOS",
        category: "Security",
        title: "Gatekeeper-Status prüfen",
        description: "Zeigt, ob Gatekeeper aktiviert ist.",
        command: "spctl --status",
        shell: "Terminal / zsh",
        risk: "safe",
        tags: ["gatekeeper", "security", "macos"]
      },
      {
        system: "macOS",
        category: "Security",
        title: "SIP-Status prüfen",
        description: "Zeigt den Status der System Integrity Protection an.",
        command: "csrutil status",
        shell: "macOS Recovery / Terminal",
        risk: "safe",
        tags: ["sip", "csrutil", "security"]
      },
      {
        system: "macOS",
        category: "Gefährliche Befehle",
        title: "Rekursiv löschen",
        description: "Löscht rekursiv und ohne Papierkorb. Zielpfad immer mehrfach prüfen.",
        command: "rm -rf /pfad/zum/ziel",
        shell: "Terminal / zsh",
        risk: "danger",
        tags: ["löschen", "danger", "rm"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "ADB-Geräte anzeigen",
        description: "Zeigt per ADB verbundene Android-Geräte an.",
        command: "adb devices",
        shell: "Terminal / PowerShell mit ADB",
        risk: "safe",
        tags: ["android", "adb", "geräte"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "ADB-Shell öffnen",
        description: "Öffnet eine Shell auf dem verbundenen Android-Gerät.",
        command: "adb shell",
        shell: "Terminal / PowerShell mit ADB",
        risk: "warning",
        tags: ["android", "adb", "shell"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "Gerät neu starten",
        description: "Startet das verbundene Android-Gerät neu.",
        command: "adb reboot",
        shell: "Terminal / PowerShell mit ADB",
        risk: "warning",
        tags: ["android", "adb", "reboot"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "Pakete auflisten",
        description: "Listet installierte Paketnamen auf dem Android-Gerät.",
        command: "adb shell pm list packages",
        shell: "Terminal / PowerShell mit ADB",
        risk: "safe",
        tags: ["android", "adb", "packages"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "Logcat anzeigen",
        description: "Zeigt Android-System- und App-Logs live an.",
        command: "adb logcat",
        shell: "Terminal / PowerShell mit ADB",
        risk: "safe",
        tags: ["android", "adb", "logs"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "Akkudaten anzeigen",
        description: "Zeigt Batteriestatus und Akkudaten des verbundenen Geräts.",
        command: "adb shell dumpsys battery",
        shell: "Terminal / PowerShell mit ADB",
        risk: "safe",
        tags: ["android", "akku", "diagnose"]
      },
      {
        system: "Android",
        category: "ADB",
        title: "Screenshot erstellen",
        description: "Erstellt einen Screenshot auf dem Android-Gerät und speichert ihn dort.",
        command: "adb shell screencap /sdcard/screen.png",
        shell: "Terminal / PowerShell mit ADB",
        risk: "safe",
        tags: ["android", "screenshot", "adb"]
      },
      {
        system: "iPhone",
        category: "Diagnose",
        title: "USB-Geräte am Mac anzeigen",
        description: "Hilft zu prüfen, ob ein iPhone per USB vom Mac erkannt wird.",
        command: "system_profiler SPUSBDataType",
        shell: "macOS Terminal",
        risk: "safe",
        tags: ["iphone", "usb", "macos"]
      },
      {
        system: "iPhone",
        category: "libimobiledevice",
        title: "iPhone-Geräte-ID anzeigen",
        description: "Listet erkannte iOS-Geräte über libimobiledevice auf.",
        command: "idevice_id -l",
        shell: "macOS/Linux mit libimobiledevice",
        risk: "safe",
        tags: ["iphone", "ios", "libimobiledevice"]
      },
      {
        system: "iPhone",
        category: "libimobiledevice",
        title: "iPhone-Informationen anzeigen",
        description: "Zeigt Geräteinformationen eines verbundenen iPhones an.",
        command: "ideviceinfo",
        shell: "macOS/Linux mit libimobiledevice",
        risk: "safe",
        tags: ["iphone", "ios", "diagnose"]
      },
      {
        system: "iPhone",
        category: "libimobiledevice",
        title: "iPhone koppeln",
        description: "Koppelt ein verbundenes iPhone mit dem Rechner, sofern das Gerät vertraut.",
        command: "idevicepair pair",
        shell: "macOS/Linux mit libimobiledevice",
        risk: "warning",
        tags: ["iphone", "pairing", "trust"]
      },
      {
        system: "iPhone",
        category: "libimobiledevice",
        title: "iPhone-Backup erstellen",
        description: "Erstellt ein lokales Backup eines verbundenen iPhones im angegebenen Ordner.",
        command: "idevicebackup2 backup ./backup",
        shell: "macOS/Linux mit libimobiledevice",
        risk: "warning",
        tags: ["iphone", "backup", "ios"]
      }
    ];

    const systems = ["Alle", "Windows", "Linux", "macOS", "Android", "iPhone"];
    let activeSystem = "Alle";
    let activeCategory = "Alle";

    const cards = document.querySelector("#cards");
    const search = document.querySelector("#search");
    const count = document.querySelector("#count");
    const viewTitle = document.querySelector("#viewTitle");
    const systemTabs = document.querySelector("#systemTabs");
    const categoryList = document.querySelector("#categoryList");

    function riskLabel(risk) {
      if (risk === "danger") return "Risiko: hoch";
      if (risk === "warning") return "Risiko: mittel";
      return "Risiko: gering";
    }

    function escapeHtml(value) {
      return value.replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));
    }

    function getFilteredCommands() {
      const q = search.value.trim().toLowerCase();
      return commands.filter(item => {
        const systemOk = activeSystem === "Alle" || item.system === activeSystem;
        const categoryOk = activeCategory === "Alle" || item.category === activeCategory;
        const haystack = [item.system, item.category, item.title, item.description, item.command, item.shell, ...item.tags].join(" ").toLowerCase();
        const queryOk = !q || haystack.includes(q);
        return systemOk && categoryOk && queryOk;
      });
    }

    function renderTabs() {
      systemTabs.innerHTML = systems.map(system => `
        <button class="tab ${system === activeSystem ? "active" : ""}" data-system="${system}">${system}</button>
      `).join("");

      systemTabs.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          activeSystem = button.dataset.system;
          activeCategory = "Alle";
          render();
        });
      });
    }

    function renderCategories() {
      const relevant = activeSystem === "Alle" ? commands : commands.filter(item => item.system === activeSystem);
      const categories = ["Alle", ...Array.from(new Set(relevant.map(item => item.category))).sort()];
      categoryList.innerHTML = categories.map(category => `
        <button class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>
      `).join("");

      categoryList.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          activeCategory = button.dataset.category;
          render();
        });
      });
    }

    function renderCards() {
      const filtered = getFilteredCommands();
      count.textContent = `${filtered.length} Befehl${filtered.length === 1 ? "" : "e"}`;
      viewTitle.textContent = activeSystem === "Alle" ? "Alle Befehle" : `${activeSystem}-Befehle`;

      if (!filtered.length) {
        cards.innerHTML = `<div class="empty">Keine passenden Befehle gefunden.</div>`;
        return;
      }

      cards.innerHTML = filtered.map((item, index) => `
        <article class="card">
          <div class="card-head">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="desc">${escapeHtml(item.description)}</p>
            <div class="meta">
              <span class="badge">${escapeHtml(item.system)}</span>
              <span class="badge">${escapeHtml(item.category)}</span>
              <span class="badge">${escapeHtml(item.shell)}</span>
              <span class="badge ${item.risk}">${riskLabel(item.risk)}</span>
            </div>
          </div>
          <pre><code>${escapeHtml(item.command)}</code></pre>
          <div class="card-actions">
            <button class="copy" data-command="${escapeHtml(item.command)}">Befehl kopieren</button>
          </div>
        </article>
      `).join("");

      document.querySelectorAll(".copy").forEach(button => {
        button.addEventListener("click", async () => {
          await navigator.clipboard.writeText(button.dataset.command);
          const original = button.textContent;
          button.textContent = "Kopiert ✓";
          setTimeout(() => button.textContent = original, 1200);
        });
      });
    }

    function render() {
      renderTabs();
      renderCategories();
      renderCards();
    }

    search.addEventListener("input", renderCards);

    document.querySelector("#reset").addEventListener("click", () => {
      activeSystem = "Alle";
      activeCategory = "Alle";
      search.value = "";
      render();
    });

    document.querySelector("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("command-helper-theme", next);
    });

    document.documentElement.dataset.theme = localStorage.getItem("command-helper-theme") || "dark";
    render();
