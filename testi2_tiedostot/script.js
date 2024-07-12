
          
          function toggleSettings() {
            var checkbox = document.getElementById('show-settings');
            var settings = document.getElementById('additional-settings');
            if (checkbox.checked) {
              settings.style.display = 'block';
            } else {
              settings.style.display = 'none';
            }
          }
          function disconnectWifi() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/submit", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send("ssid=''&password=''");
            // Delay the execution of the following block of code
            setTimeout(function() {
                xhr.onload = function() {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        // Handle the success, maybe reload the page or redirect
                        window.location.reload();
                    }
                };
            }, 500);
            }
            // Function to confirm disconnection
          function confirmAndDisconnect() {
              if (confirm("Are you sure you want to disconnect from the network?")) {
                  disconnectWifi();
              }
            }
          function translatePage() {
              // Define translations for Finnish (fi) and Swedish (sv)
              const translations = {
                  en: {
                      subtitle: "Configure your device:",
                      wifiSubtitle: "Connect to Wifi",
                      status: "WiFi Network:",
                      passwordLabel: "Wifi Password:",
                      keyStatus: "Product key",
                      countryLabel: "Country/Area:",
                      hoursLabel: "Select hours",
                      maxpriceLabel: "Max Price",
                      settingsLabel: "Show Additional Settings:",
                      ipLabel: "Set static IP-address",
                      serverLabel: "Server address",
                      lanConfigLabel: "Configure from LAN:",
                      lanUserLabel: "LAN-access username",
                      lanPasswordLabel: "LAN-access password",
                      remoteControlLabel: "Remote control from Powerant app:",
                      appUserLabel: "App username",
                      appPasswordLabel: "App password",
                      submitButton: "Connect",
                      connectWifiButton: "Connect to WiFi",
                      disconnectedWifi: "Disconnected",
                      loginSubtitle: "Login/Register",
                      loggingSubtitle: "Logging in: ",
                      productKeySubtitle: "Product Key",
                      validatingKeySubtitle: "Validating product key...",
                      nextButton: "Next"

                  },
                  fi: {
                      subtitle: "Määritä laitteesi:",
                      wifiSubtitle: "Yhdistä laitteesi WiFi-verkkoon",
                      connectingWifiSubtitle: "Yhdistetään verkkoon: ",
                      status: "WiFi-verkko:",
                      passwordLabel: "WiFi-salasana:",
                      keyStatus: "Tuoteavain: ",
                      countryLabel: "Maa/Alue:",
                      hoursLabel: "Halvimmat tunnit",
                      maxpriceLabel: "Hintakatto",
                      settingsLabel: "Näytä lisäasetukset:",
                      ipLabel: "Staattinen IP-osoite",
                      serverLabel: "Palvelimen osoite",
                      lanConfigLabel: "Määritä LAN:n kautta:",
                      lanUserLabel: "LAN-käyttäjätunnus",
                      lanPasswordLabel: "LAN-salasana",
                      remoteControlLabel: "Etäohjaus Powerant-sovelluksella:",
                      appUserLabel: "Sähköposti",
                      appPasswordLabel: "Salasana",
                      submitButton: "Kirjaudu",
                      connectWifiButton: "Yhdistä verkkoon",
                      disconnectedWifi: "Ei yhteydessä",
                      loginSubtitle: "Kirjaudu/Rekisteröidy",
                      loggingSubtitle: "Kirjaudutaan käyttäjällä: ",
                      productKeySubtitle: "Tuoteavain",
                      validatingKeySubtitle: "Varmennetaan tuoteavainta...",
                      nextButton: "Seuraava",
                      saveButton: "Tallenna"
                  },
                  sv: {
                      subtitle: "Konfigurera din enhet:",
                      status: "WiFi-nätverk:",
                      passwordLabel: "WiFi-lösenord:",
                      keyStatus: "Produktnyckel",
                      countryLabel: "Land/Område:",
                      hoursLabel: "Välj timmar",
                      maxpriceLabel: "Maxpris",
                      settingsLabel: "Visa ytterligare inställningar:",
                      ipLabel: "Ställ in statisk IP-adress",
                      serverLabel: "Serveradress",
                      lanConfigLabel: "Konfigurera från LAN:",
                      lanUserLabel: "LAN-åtkomstanvändarnamn",
                      lanPasswordLabel: "LAN-åtkomstlösenord",
                      remoteControlLabel: "Fjärrstyrning från Powerant-appen:",
                      appUserLabel: "Appanvändarnamn",
                      appPasswordLabel: "Applösenord",
                      submitButton: "Anslut"
                  }
              };
              
              // Get the browser's language or default to English if not Finnish or Swedish
              const language = navigator.language.slice(0, 2) in translations ? navigator.language.slice(0, 2) : 'en';

              // Update all text content based on the current language
              Object.keys(translations[language]).forEach(key => {
                  const element = document.getElementById(key);
                  if (element) {
                      if (key === 'submitButton' || key === 'connectWifiButton' || key === 'nextButton') {
                          element.value = translations[language][key]; // Set the value for input elements
                      } else if (key === 'saveButton' || key === 'connectWifiButton' || key === 'nextButton') {
                          element.value = translations[language][key]; // Set the value for input elements
                      }
                      else {
                          element.textContent = translations[language][key];
                      }
                  }
              });
          }
          document.addEventListener('DOMContentLoaded', function() {
              translatePage();
          });
