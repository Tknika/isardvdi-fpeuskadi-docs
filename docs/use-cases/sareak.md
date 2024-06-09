# Sareak Isarden
Gida honen helburua ez da Isardeko sareei buruzko manual bat sortzea, Isarden sareekin egin daitezkeen zenbait kasu praktiko lantzea baizik. Ondorioz hasieran sareei buruzko oinarrizko informazio bat emango da, beti ere aurrerago erabiliko dugunerantz fokua jarrita edo jada gure ikastetxean duguna azalduz baina ez [sareei buruzko dokumentazio ofizial (Isarden)](https://isard.gitlab.io/isardvdi-docs/user/networks/) gisa. Dokumentazio ona da eta edozein zalantzatarako bertara jo.

## Oinarrizko kontzeptuak
Isarden 4 sare mota nagusi ditugu:
- **Default** sarea: Internetera sarbide automatikoa duen BAKARRA. DHCP bitartez jasotzen ditu IP eta atebidea eta sare isolatu bezala, zuzen zuzenean irtetzen da.
- **OpenVSwitch sareak**. Hauek dira gehien erabiliko ditugun sareak Isarden. Isardeko sare ohikoen gisa jo ditzakegu. Switch bat izatea bezala da non bertara konektatzen den guztia lotuta egongo den eta erabiltzaile ezberdinen artean parteka dezakeguna. Adibidez guk, gelako, honako sare bat dugu, non bertako ikasle eta irakasleek mahaigainak ipin ditzaketen. Mahaigai horiek ez lukete ez IPrik, ez internetera irteerarik... Norbere esku konfiguratzea.
- **Infrastructure sareak**. Non gure gela fisikoak, Isardekoekin lotzen ditugun. Bertan ezarritako egozein gailu gelatik atzitu ahal izango da. Gure gela fisiko bakoitza, Isarden dugu bertan ere "jolasteko" aukerak izateko. Sare hauetan, gelako konfigurazioak ipinita Internetera irtetzea izango dugu
- **Pertsonalak**. Sare pertsonalak, norberarenak eta isolatuak. Bertan jarritako mahaigainak, soilik norbere mahaigainekin konektatu ahal izango dira. Ezin dira partekatu. Guk 1-3 sare pertsonal esleitzen dizkiogu ikasle bakoitzari
- **WireGuard-VPN sareak**. Sare hauen helburua, erabiltzen zauden ordenagailu fisikoa eta Isardeko mahaigaina konektatzen dituen sare bat sortzea da. Erabilpen ezberdin (eta interesgarri) asko ditu, RDP bisoreetarako behar izatetik, etxeko ordenagailua Isardekoarekin (edo ikastetxeko montajearekin) bat egiteko aukerak. (5. sare mota honen erabilpen kasuak egitea ez da puntu hontan gure helburua)


Sareen kudeaketarako administrari gisa Isarden sartzean, Administrazioa --> Domains --> Resources (1. irudia):

![Sareak non konfiguratu](images-sareak/01_01sareakNon.png)

Aurreikusi dezakezuen bezala, sare pila bat ditugu Isarden, 100 inguru beraz irudian ikus daitekeen sare identifikadoreekin ez nahasteko dokumentu bat dugu.
Puntu hontan IKT sailaren bilera bat derrigorra da beharrezkoak izango ditugu sareak identifikatzeko, Aurrerago ere gehitu ahal izango diren arren. 
Sareak gure ikastetxean: 
- ikasleko 1-3 (eta 5 irakasleko) sare Pertsonal ditugu
- gela arruntetan 2 sare, bata gelako fisikoarekin lotuta (*"Infrastructure vlan"* sarea) eta bestea gelako birtuala izango dena.
- horrez gain Ethaziko erronka bitartez sareekin lanean ari diren geletan beste 3-5 sare gelako ethazi talde bakoitzeko
- Zikloko sarea (1. eta 2. mailako ikasleek ikusiko luketena)
- Irakasleentzako sarea
- Default sarea, berez txantilloi gehienetaz izaten dena eta Internetera sarbibea ematen dizuna
- ...


## Sareak sortzen
Aurreko 1. irudiko "add new" edo sare bati egokitutako "arkatz" ikonoak klikatuz, hau genuke: (2. irudia)

![Sareak konfiguratzen](images-sareak/01_02sareakKonfiguratzen.png)

Hor ikusten denez, sareaen izena ASIR2-T11 da eta gela hortako erronketako lehen taldearen lehen sarea da. OpenVSwitch motakoa da eta gure barne dokumentazioaren arabera 2632 vlan IDa dauka
QoS gisa, komenigarria da, beti,mugaren bat jartzen.

Hurrengo pausoa, sarea nork ikus dezakeen erabakia da, horretarako 1. irudiko "jendetsa" ikonoa klikatuz (3. irudia).

![Baimenak Esleitzen](images-sareak/01_03baimenakEsleitzen.png)

Hemen, esandako sarea esleitzen dugu, erabiltzaileka, kategoriaka, taldeka... Kasuan, SISA-2 taldeak eta InforIrakas taldeek bakarrik ikusiko dute.

```
Orainartekoa Administrariaren lana da. Hemendik aurrera (sareen erabilpena) edozen erabiltzailek egin ahal izango du.
```


## Ordenagailuak konektatzen ##
### 01-. Bi ekipo interneterantz ###
Edozein bi ekipo sortu eta Internetera konektatzeko modurik errazena **Default** sarea erabiliz egitea da.
Beraz, frontendeko pantailatik Mahaigain berria klikatu. (4. irudia)

![Mahaigaina sortzeko botoia](images-sareak/01_04sortzenBotoia.png)

Eta ondoren txantiloi bat erabiliz (guk asko ditugu eta nik T3 idatziz bilaketa bat egin dut) bat aukeratu. (5. irudia) 

![Mahaigaina Sortzen](images-sareak/01_05mahaigainaSortzen.png)

**Aukera aurreratuak** klikatuta daukat eta bertan bisoreez gain, mahaigain honek lehenetsita dituen ezaugarria ikusten dira. Orain gure gustora eraldatu ditzakegu.
Ariketa hontarako behakaldean doi-doi ikusten den *Sareak* atala eta *Default* (aukeratutakoa) dira garrantzitsuak.

Sareak atala desplegatuz erabiltzaileak ikus ditzakeen sareen zerrenda agertuko da. (6. irudia)

![Sareen zerrenda](images-sareak/01_06sareenZerrenda.png)

Ariketa hontarako, esan bezala, ***Default*** sarea bakarrik erabiliko da.

Ordenaigailu bat badugu. Orain bigarren bat egingo dugu, pausu berdinak jarraituz. Nire kasuan Ubuntu txantiloi bat aukeratu dut Windows-Linux sare ariketa egiten hasteko. Baina bigarren mahaigaina Windows bat aukeratuz ere berdin berdin joango da.
Sortze fase hontako bukaeran 2 mahaigain izango ditugu. (5.irudia)

![Bi mahaigain, Win eta Ubuntu](images-sareak/01_07biMahaigain.png)


> Mahaigainak duen "..." (hiru puntu) ikonotxoa klikatu eta ondoren arkatza aukeratuz--> **zuzendu/editatu** --> berriro mahaigaina editatu dezakegu. Fija zaitezte **Sareak** atalean eta nola **Default** dugun aukeratuta. Eta justu azpian? Default sare hortara konektatuko den sare txartelaren **MAC zenbakia**!
> ![Sare txartelaren MAC zenbakia](images-sareak/01_08macZenbakia.png)


Pantaila nagusira bueltatuz, piztu ditzagun gure 2 mahaigainak ***HASI*** klikatuz.

Hurrengo irudian (09) bi ordenagailuak ikus ditzakegu, piztuta eta Internet dutelarik.

![Bi piztuta](images-sareak/01_09biMahaigainPiztuta.png)

Windowsaren IPa 192.168.121.87/22 da, eta ubuntuarena 192.168.121.124/22
Sare berdinean al daude? Ping egin al dezakete?
Itxura baten, IPak eremu berdinean eta "**Default**" sarean daude biak eta guztia dago ondo baina...

**EZ. EZ DAUDE SARE BERDINEAN, EZ DUTE PING EGITEN.** (ikusi 10. irudia)
![Ez dute ping egiten](images-sareak/01_10ezDutePIngEgiten.png)

>Zergatia erraza da, hasierako azalpenean komentatu den bezala, Isardeko sare motek funtzio ezberdinak dituzte eta Default sareak internetera sarbidea ematen du, baina ekipo bakoitza bere sare isolatu propioan kokatuz. Bakoitzaren IP konkretuak berdin dio, isolatuak daude.

Zer egin dezakegu elkarri ping egin diezaioten? goazen zenbait aukera ikustera

### 02-. Bi ekipok elkarri ping egin

Aurreko ariketa garatzen jarraituko dugu.
Dakigunakin, nola lor dezakegu bi ekipoek elkar ping egin dezaten?

***Default*** ez den beste sare batera konektatuz.

Sare "***orokorrak***" (OpenVSwich sareak, ikusi [Oinarrizko kontzeptuak puntua](#oinarrizko-kontzeptuak)) erabiliko ditugu erabiltzaileen ezberdinen mahaigainen arteko **ping**/konexioak egiteko eta sare ***Pertsonalak*** norberaren sareetan ibiltzeko (besteei trabarik egin gabe, laborategi propio eta isolatuak sortuz).

Kasu honetan, Pertsonala sareak erabiliko ditugu, ondorioz ikasle guztiek batera egin dezakete ariketa hau, -IP berdinak ipinita eta elkar ikusi gabe-, bakoitzaren mahaigainak bere esparruaren barruan geldituko baitira. Eta ikasle desberdinen mahaigainek ez dute elkar joko/ikusiko.

Beraz, esandakoa, bide erraza dugu. Mahaigainak gelditu, zuzendu/editatu, sareak **Pertsonala1**ean jarri **Default**en ordez eta ondoren mahaigainak berriz piztu. 

Lehenik zuzendu/editatu (ikusi 11. irudia)

![Zuzendu/Editatu](images-sareak/01_11editatu.png)

Desaukeratu Default (ikusi 12. irudia)

![Default Desaukeratu](images-sareak/01_12defaultDesaukeratu.png)

Pertsonala1 aukeratu eta aldaketak onartu.(ikusi 13. irudia)

![Pertsonala1 aukeratu](images-sareak/01_13pertsonala1Aukeratu.png)

Eta mahaigainak abiarazi
>Pertsonala1 sarean (Default ez, beste guztietan), ez dugu IPrik jasotzen, beraz guk eskuz jarri beharko ditugu!

192.168.1.1/24 eta 192.168.1.2/24 ip-ak jarriko dizkiegu.
Eta jada hasi gara "arazotxoaz" konturatzen. Zein izango dute atebidea? Atebiderik gabe ez dute interneterik!

Ez dute Internetik izango.
Ikusi 14. irudian, nola ping bai baina ez dugun internetik, ez DNSrik...

![Ping Bai, Internet Ez](images-sareak/01_14pingBaiInternetEz.png)

Ezin al dute bi mahaigainek elkar ikusi eta Internet izan?

### 03-. Bi ekipok elkarri ping egin eta Internetera konexioa izan.

Badaude zenbait modu hau lortzeko, errazenetatik, logikoenetara (sareen ikuspuntutik). Goazen aukera pare bat ikustera.

#### 03.01-. Bi sare txartel erabiliz

Dakigunaren, ikusten da Default-ek sare txartelak Internet ematen digula, Pertsonala1ek aldiz, elkar lotzeko (ping) aukera, beraz zergatik ez ditugu 2 txartelak erabiltzen?

Goazen hortara orduan.
