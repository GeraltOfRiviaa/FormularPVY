let hry = [{
    hra:'',
    hodiny:'' ,
    uspechy: ''
}]
let merak = 0;
let prazdnaHra = 0;
let bonus = 0; 
let cyklus = 0; 
    document.getElementById('pridani').addEventListener('click', function() {
        hry.push({hra: document.getElementById('game').value, 
                hodiny:document.getElementById('hodiny').value, 
                uspechy:document.getElementById('uspechy').value})
    if(merak == 0){
        hry.shift();
        merak++;
    }
    for (let i = 0; i < hry.length; i++) {
        if (hry[i].hra == '') {
            hry.splice(i, 1);
            prazdnaHra = 1;
        }
    }
    if(prazdnaHra == 1){
        alert('Nemůžeš mít prázdné pole hra');
        prazdnaHra = 0;
        //console.log(hry);
    }
                
    aktualizovatSeznam();
    });

    document.getElementById('serazeni').addEventListener('click', function() {
        
        if (document.getElementById('radio1').checked) {
            hry.sort((a, b) => b.hodiny - a.hodiny);
        } else if (document.getElementById('radio2').checked) {
            hry.sort((a, b) => b.uspechy - a.uspechy);
        } else if (document.getElementById('radio3').checked) {
            hry.sort((a, b) => a.hra.localeCompare(b.hra));
        }
        aktualizovatSeznam();
        
        
        if(hry.length > 1){
            hodnoceni();
        }
        else{
            alert('Musíš mít v seznamu aspoň 2 hry');
        }
        for (let i = 0; i < hry.length; i++) {
            for (let j = 1; j < hry.length; j++) {
                if(hry[i].hodiny == hry[j].hodiny){
                    bonus = 1;
                }
                else{
                    bonus = 0;
                }
                
            }
            
        }
        if(bonus == 0){
            vytiskBonusu();
        }
        else  {
            let bonusE = document.getElementById('bonus');
            let bonusT = document.createElement('p');
            bonusT.className = 'text-center display-7 '
            bonusT.innerHTML = `A teď co máš radši?  ${hry[0].hra} nebo ${hry[1].hra}?`;
            bonusE.appendChild(bonusT);
        }
            
    });
    
    function aktualizovatSeznam() {
        let seznamHer = document.getElementById('seznamHer');
        seznamHer.innerHTML = '';
    
        hry.forEach(vytiskSeznam);
    }
    document.getElementById('reset').addEventListener('click', function() {
        /*
        hry = [];
        aktualizovatSeznam();
        merak = 0;
        bonus = 0;
        prazdnaHra = 0;
        */
    location.reload();
;
    })
    function vytiskSeznam(hry) {
        let li = document.createElement('li');
        li.className = 'list-group-item text-white bg-primary d-flex justify-content-between align-items-center col-md-12 shadow-lg rounded-pill';
        li.innerHTML = `
            ${hry.hra}
            <span class="badge bg-dark rounded-pill p-2 ms-auto">Hodiny: ${hry.hodiny}</span>
            <span class="badge bg-dark rounded-pill p-2 ms-3">Úspěchy: ${hry.uspechy}</span>
        `;
        seznamHer.appendChild(li);
    }
    function hodnoceni(){
        let hodnoceniElement = document.getElementById('hodnoceni');
        let hodnoceniText = document.createElement('p');
        hodnoceniText.className = 'text-center display-3 shadow border border-5 rounded-pill border-primary'
        let existingHodnoceniText = document.querySelector('#hodnoceni p');
        if (existingHodnoceniText) {
            existingHodnoceniText.remove();
        }

        if (document.getElementById('radio1').checked) {
            if(hry[0].hra == 'War Thunder'){
                hodnoceniText.innerHTML ='Tak to si musíme někdy zahrát. Jakou hraješ zemi? A ta pravá otázka...letadla nebo tanky? ';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'League of Legends'){
                hodnoceniText.innerHTML = 'Běž ven a zkus se dotknout té zelené věci co roste na zemi. Říká se tomu tráva.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'World of Tanks'){
                hodnoceniText.innerHTML = 'Doufám, žes to hrál tak moc dříve. Pokud to hraješ i teď, tak bys mohl třebas i dospět a zkusit tu pravou hru s tanky, nech se poddat šnekovi.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Minecraft'){
                hodnoceniText.innerHTML = 'To musíš být ten pohodový týpek.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Counter-Strike 2'){
                hodnoceniText.innerHTML = 'Fuuuha tak tomu se říka oddanost.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'For Honor'){
                hodnoceniText.innerHTML = 'Respekt.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Overwatch'){
                hodnoceniText.innerHTML = 'Wow tak to jsem nečekal. Asi už ale vím, co sleduješ na oranžovém youtubu';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Fortnite'){
                hodnoceniText.innerHTML = 'Buď to potíš, a nebo jsi jenom pohodový týpek, co rád hraje svoji hru, která měla před pár lety peak. Tak či onak máš můj respekt.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Tom Clancy's Rainbow Six Siege"){
                hodnoceniText.innerHTML = 'Noice taktické střílečky mám taky rád, ale nevydrželo mi to zas tak dlouho. Jaký máš asi pak rank s tímhle počtem hodin?';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "GTA V"){
                hodnoceniText.innerHTML = 'Wow, nevím co tam děláš, ale asi nejsi moc náročný.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Apex Legends"){
                hodnoceniText.innerHTML = 'Dobrá, tady není co namítat.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Among Us"){
                hodnoceniText.innerHTML = 'Jdi skočit z mostu v Minecraftu';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Call of Duty: Warzone"){
                hodnoceniText.innerHTML = 'Insane';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            
        } 
        else if (document.getElementById('radio2').checked) {
            if(hry[0].hra == 'War Thunder'){
                hodnoceniText.innerHTML = 'Buď si insane a máš vyzkoumaných několi stromů několika národů a nebo prostě nejedeš a achievenemty :d';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'League of Legends'){
                hodnoceniText.innerHTML = 'https://www.youtube.com/watch?v=fZxHDwKlI6I ';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'World of Tanks'){
                hodnoceniText.innerHTML = 'Jdi si založit gaijin účet. Začni svůj grind. Bude tě to bavit';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Minecraft'){
                hodnoceniText.innerHTML = 'Hej tak to si musel dělat hodně dlouho, ale teď zkuš všechny v KDC.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Counter-Strike 2'){
                hodnoceniText.innerHTML = 'Však tam je jen jeden úspěch. Tak to jako je ale slabý :d';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'For Honor'){
                hodnoceniText.innerHTML = 'Respekt++.';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Overwatch'){
                hodnoceniText.innerHTML = 'Wow. Nemám slov :D';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == 'Fortnite'){
                hodnoceniText.innerHTML = 'No tak takhle tu hru snad nikdo nehraje, ale taky cool';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Tom Clancy's Rainbow Six Siege"){
                hodnoceniText.innerHTML = 'Noice to by se mi fakt nechtělo dělat';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "GTA V"){
                hodnoceniText.innerHTML = 'Hej to musím taky zkusti, možná ta hra bude tak nachvilku zábavná';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Apex Legends"){
                hodnoceniText.innerHTML = 'Tady se není s čím vytahovat ';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Among Us"){
                hodnoceniText.innerHTML = 'Jdi skočit z mostu v Robloxu';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            else if(hry[0].hra == "Call of Duty: Warzone"){
                hodnoceniText.innerHTML = 'Insane++';
                hodnoceniElement.appendChild(hodnoceniText);
            }
            
        }
        
        
    }
    function hodinyDny(){
        let hodinyCelkove = 0;
        for(let i = 0; i < hry.length; i++){
            hodinyCelkove += Number(hry[i].hodiny);
        }
        if(hodinyCelkove < 1){
            return 0;
        }
        else {
            return Math.round(hodinyCelkove/24);
        }
        
    }
    function dnyHodiny(){
        let hodinyCelkove = 0;
        for(let i = 0; i < hry.length; i++){
            hodinyCelkove += Number(hry[i].hodiny);
        }
        return hodinyCelkove % 24;
    }
    function secteniUspechu(){
        let uspechyCelkove = 0;
        for(let i = 0; i < hry.length; i++){
            uspechyCelkove += Number(hry[i].uspechy);
        }
    return uspechyCelkove;
    }
    function vytiskBonusu(){
        let bonusE = document.getElementById('bonus');
        let bonusT = document.createElement('p');
        bonusT.className = 'text-center display-7 '
        bonusT.innerHTML = `Po sečtení všech hodin a úspěchů ze všech her vyšlo, že jsi hrál ${hodinyDny()} dní, ${dnyHodiny()} hodin a získal jsi ${secteniUspechu()} achievementů.`;
        bonusE.appendChild(bonusT);
    }
    
