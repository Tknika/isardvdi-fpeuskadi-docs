# IsardVDI - Moodle integrazioa

Ikasle gehienek bere moduloetan prestatuak dituzten mahagain birtualak bakarrik erabili behar dituzte. Hau da, ez dute IsardVDI ematen dizkigun beste aukerak erabili behar: mahaigain birtualaren ezaugarriak (RAM, CPU,sareak,...) modifikatu, ISOak igo, instalazioak , txantiloiak, etab.

Kasu hauetarako, moodlen erabiltzaile bakoitzak modulo bakoitzean erabili behar duen VDI lasterbide bat nola konfiguratu dezakegun azalduko dugu.

## Konfigurazioa: Moodle

1. Moodlen honako pluginak instalatu:

- FilterCodes: [https://moodle.org/plugins/filter_filtercodes](https://moodle.org/plugins/filter_filtercodes)

- Customfield_file: [https://github.com/andrewhancox/moodle-customfield_file](https://github.com/andrewhancox/moodle-customfield_file)

2. IsardVDI fitxategiekin lana egiteko plugin-en egokitzapena:

- filtercodes [filter.php](./files-moodle/filter.php) fitxategia modifikatu, //MUA artean dagoena gehitu

- customfield [lib.php](./files-moodle/lib.php) fitxategia modifikatu, //MUA artean dagoena gehitu

3. Site Administration--->Manage Filters, FilterCodes ON jarri behar da (Manage Filters irudia ikusi). Ezarpenak ez dira ikutu.

![manage-filters](./images-moodle/i4y_Image_1.png)

4. Site Administration --->Courses-->Course custom fields atalean File motako "vdi_estekak" eremua sortuko dugu:

![course-custom-fields](./images-moodle//7dy_Image_2.png)

5. Kurtsoan eremu pertsonalizatu bat gehitzen denean, ikastaroko fitxan agertu ez dadin, irudian agertzen den css kodea gehitu behar da:

![custom-css](./images-moodle//kJF_Image_3.png)

6. VDIen loturak publikatu nahi diren ikastaroetan Etiketa motako jarduera bat gehitu. Editatu ta Testu editorean html kodea gehitu da eta FilterCode Tags hau erabiliko da:  ```{profile_field_shortname}```

HTML kodea adibidea:

```html
<div class="info-box">

<h4><span style="font-size: 1.5rem;">Escritorio Virtual:</span></h4>

<div class="remember-box">

<p>{course_field_vdi_estekak}</p>

</div>

</div>
```

Erabiltzaileek horrela ikusiko lukete:

![erabiltzaile-esteka](./images-moodle//1vC_Image_4.png)

Sakatzerakoan honakoa ikusiko lukete:

![erabiltzaile-emaitza](./images-moodle//tiJ_Image_5.png)

Bertan sakatu ezkero, nabigatzailean VDI-an gaitutak dauden bisoreen botoioak ikusiko genituzke, adibidez:

![bisoreak](./images-moodle//ILn_Image_6.png)


## Erabilera: VDIak IsardVDI-tik Moodle-era.

Garrantzitsua: Isard eta moodle erabiltzaileek email berdina konfiguratua izatea beharrezkoa da, erabiltzaile bakoitzari erakutsiko dion VDI esteka erabakitzeko hori erabiliko du eta.

Hedapen (deploy) batean sartuko gara, horretarako Deployments atalean sartu:

![deployments](./images-moodle//DJl_Image_7.png)

Bat aukeratu eta bistaratua dagoela konprobatuko degu,  bestela bistaratu:

![bistaratu](./images-moodle//dBH_Image_8.png)

Hurrengo urratsa VDIen estaka fitxategia jeistea da, horretarako hemen sakatuko dugu:

![fitxategia-jaitsi](./images-moodle//TjX_Image_9.png)

Bertan URL-ak berritu edo mantendu nahi ditugun galdetuko digu, kasu honetan mantenduko ditugu:

![keep-url](./images-moodle//5Me_Image_10.png)

CSV motako fitxategi bat deskargatuko digu.


**Moodle-en:**

Dagokion ikastaroan sartu-> Editar curso->Editar Ajustes:

![editar-ajustes](./images-moodle//R4H_Image_12.png)

Moodle-en dena ondo konfiguratuta baldin badugu VDI atalean:

![konfigurazioa](./images-moodle//jmT_Image_13.png)

![konfigurazioa-2](./images-moodle//tyF_Image_14.png)

Aldaketak gorde:

![aldaketak-gorde](./images-moodle//fX6_Image_15.png)

Ta konprobatzeko lehen sortu dugun etiketan sartzen bagara:

![etiketan-sartu](./images-moodle//Qx9_Image_16.png)

VDI-aren esteka ikusi beharko genuke

![amaiera-esteka](./images-moodle//KJf_Image_17.png)

Laborategi baterako VDI bat baino gehiago erabili nahi baditugu, VDI bakoitzeko Deploy bat egingo degu eta bere CSV fitxategia jetsi eta moodlere igo. Horrela ikasleek esteka bat baino gehiago izango dituzte.

Eskerrak eman pluginak egokitu dituen Mikel Urkiaga (Poke) lankideari!!!.
