function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 13,
    //mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Associação dos Jovens Empresários de Recife</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>A AJE RECIFE é uma associação de Jovens Empresários do Pernambuco, fundada em 2014, desenvolvida a partir de três pilares: capacitação, relacionamento e representatividade.Objetivando o fomento e consolidação do empreendedorismo jovem, a AJE Recife é a única entidade jovem do estado de Pernambuco filiada à Confederação Nacional de Jovens Empresários – CONAJE – representando uma rede nacional de 36 mil jovens empresários, que realiza suas atividades e projetos através de 3 pilares.</p>'+
        '<p>Telefone: 81-34281233</p>'+ '<img src="images/aje.jpg" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Creche Nossa Senhora dos Remédios</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>A <b>Creche Nossa Senhora Dos Remédios</b> é uma Instituição filantrópica que a mais de 36 anos é responsável por acolher as crianças que dela necessitam.</p>'+
        '<p>Telefone: (81) 34282273</p>'+ '<img src="images/cnsr.jpg" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Vestibular Cidadão</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>Um projeto que ministra aulas PRÉ-ENEM gratuitamente, voltado para o público que deseja concorrer a uma vaga em um curso superior de qualquer universidade brasileira (através do SISU). Trata-se de um “projeto de extensão” vinculado à Faculdade de Direito do Recife mas que contém professores voluntários/as graduandos e graduados dos mais variados cursos universitários.</p>'+
        '<p>Telefone: (81) 2126-7875</p>'+ '<img src="images/vc.jpg" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString4 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Abrigo Cristo Redentor</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>Abrigar, proteger e proporcionar assistência a Idosos de ambos os sexos, visando uma melhoria constante na qualidade de vida, com dignidade e o conforto necessário, mantendo e resgatando sua cidadania.</p>'+
        '<p>Telefone: (81) 3257.8000</p>'+ '<img src="images/acr.png" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString5 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Santa Casa de Misericórdia do Recife</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>O objetivo principal dos serviços desenvolvidos fundamenta-se na disponibilidade dos serviços de saúde, conforme preconiza o SUS, além dos serviços de assistência social tipificados como atendimento. São alguns: Habilitação e reabilitação de pessoas com deficiência visual, visando a sua promoção à vida comunitária; Proteção social ao idoso através de Instituição de Longa Permanência; Atividades socioeducativas destinadas às crianças e adolescentes em situação de vulnerabilidade social.</p>'+
        '<p>Telefone: (81) 3412.3800</p>'+ '<img src="images/scmr.png" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString6 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"> Associação Beneficente Criança Cidadã (ABCC)</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>ABCC gerencia três programas: O Espaço Cultural e Esportivo Criança Cidadã, a Orquestra Criança Cidadã Meninos do Coque e a Olimpíada Criança Cidadã.Além dos dois principais projetos, a ABCC investe em outras ações. Através do projeto de aluguéis temporários, paga, por um período máximo de seis meses, o abrigo de famílias com crianças e adolescentes em situação de moradia de rua; a ABCC também contribui financeiramente com o Projeto Frevart, que oferece aulas de sopro e percussão a jovens residentes em Santo Amaro e adjacências.</p>'+
        '<p>Telefone: (81) 3224-0305</p>'+ '<img src="images/ABCC.png" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString7 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">O Centro Brasileiro da Criança e do Adolescente</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>A casa tem como objetivo promover o protagonismo sócio-político de crianças, adolescentes, jovens e mulheres em situação de vulnerabilidade social, com base numa proposta de formação que resulte em cidadãos/cidadãs críticos/críticas, empoderados/empoderadas politicamente na perspectiva de inserção no mundo do trabalho.</p>'+
        '<p>Telefone: (81) 3423.3839/3423.2930</p>'+ '<img src="images/cp.png" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var contentString8 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lar de Clara</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>Uma instituição aprendente e sólida na promoção social das famílias através de ações educacionais, com foco nas crianças, adolescentes e jovens, realizando a solidariedade cristã pelos princípios da responsabilidade e da afetividade.</p>'+
        '<p>Telefone: (81) 3479-4081 </p>'+ '<img src="images/ll.jpg" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';    

    var contentString9 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Centro de Integração Empresa-Escola de Pernambuco</h1>'+
        '<div id="bodyContent" style=" text-align:justify; text-justify:inter-word;">'+
        '<p>Integração ao mercado de trabalho, através do estágio, da aprendizagem e da qualificação de pessoas, contribuindo para o desenvolvimento do Brasil, na área da educação, da ciência e da cultura.</p>'+
        '<p>Telefone: (81) 3131-6100</p>'+ '<img src="images/ciee.jpg" style="width:100%;height:50%;">'+
        '</div>'+
        '</div>';

    var infoWindow = new google.maps.InfoWindow({map: map});
    var infoWindowMarker = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
    });

    var infoWindowMarker2 = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 300
    });

    var infoWindowMarker3 = new google.maps.InfoWindow({
        content: contentString3,
        maxWidth: 300
    });

    var infoWindowMarker4 = new google.maps.InfoWindow({
        content: contentString4,
        maxWidth: 300
    });

    var infoWindowMarker5 = new google.maps.InfoWindow({
        content: contentString5,
        maxWidth: 300
    });

    var infoWindowMarker6 = new google.maps.InfoWindow({
        content: contentString6,
        maxWidth: 300
    });

    var infoWindowMarker7 = new google.maps.InfoWindow({
        content: contentString7,
        maxWidth: 300
    });

    var infoWindowMarker8 = new google.maps.InfoWindow({
        content: contentString8,
        maxWidth: 300
    });

    var infoWindowMarker9 = new google.maps.InfoWindow({
        content: contentString9,
        maxWidth: 300
    });

    var positionMarker = {lat:-8.044497, lng:-34.932035};
    var positionMarker2 = {lat:-8.0640778, lng:-34.9114491};
    var positionMarker3 = {lat:-8.0500708, lng:-34.8913824};
    var positionMarker4 = {lat:-8.0815114, lng:-34.9779192};
    var positionMarker5 = {lat:-8.0414924, lng:-34.8726624};
    var positionMarker6 = {lat:-8.0631483, lng:-34.8768195};
    var positionMarker7 = {lat:-8.0520604, lng:-34.8825337};
    var positionMarker8 = {lat:-8.1557371, lng:-34.9157231};
    var positionMarker9 = {lat:-8.058284, lng:-34.892811};


    var marker = new google.maps.Marker({
        position: positionMarker,
        map: map,
        title: 'Associação dos Jovens Empresários de Recife',
        animation: google.maps.Animation.DROP
    });

    var marker2 = new google.maps.Marker({
        position: positionMarker2,
        map: map,
        title: 'Creche Nossa Senhora dos Remédios',
        animation: google.maps.Animation.DROP
    });

    var marker3 = new google.maps.Marker({
        position: positionMarker3,
        map: map,
        title: 'Vestibular Cidadão',
        animation: google.maps.Animation.DROP
    });

    var marker4 = new google.maps.Marker({
        position: positionMarker4,
        map: map,
        title: 'Abrigo Cristo Redentor',
        animation: google.maps.Animation.DROP
    });

    var marker5 = new google.maps.Marker({
        position: positionMarker5,
        map: map,
        title: 'Santa Casa de Misericórdia do Recife',
        animation: google.maps.Animation.DROP
    });

    var marker6 = new google.maps.Marker({
        position: positionMarker6,
        map: map,
        title: 'Associação Beneficente Criança Cidadã (ABCC)',
        animation: google.maps.Animation.DROP
    });

    var marker7 = new google.maps.Marker({
        position: positionMarker7,
        map: map,
        title: 'Associação Beneficente Criança Cidadã (ABCC)',
        animation: google.maps.Animation.DROP
    });

    var marker8 = new google.maps.Marker({
        position: positionMarker8,
        map: map,
        title: 'Lar de Clara',
        animation: google.maps.Animation.DROP
    });

    var marker9 = new google.maps.Marker({
        position: positionMarker9,
        map: map,
        title: 'Associação Beneficente Criança Cidadã (ABCC)',
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', toggleBounce);
    marker2.addListener('click', toggleBounce2);
    marker3.addListener('click', toggleBounce3);
    marker4.addListener('click', toggleBounce4);
    marker5.addListener('click', toggleBounce5);
    marker6.addListener('click', toggleBounce6);
    marker7.addListener('click', toggleBounce7);
    marker8.addListener('click', toggleBounce8);
    marker9.addListener('click', toggleBounce9);


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker.open(map, marker);
            setTimeout(function(){
                marker.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce2() {
        if (marker2.getAnimation() !== null) {
            marker2.setAnimation(null);
        } else {
            marker2.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker2.open(map, marker2);
            setTimeout(function(){
                marker2.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce3() {
        if (marker3.getAnimation() !== null) {
            marker3.setAnimation(null);
        } else {
            marker3.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker3.open(map, marker3);
            setTimeout(function(){
                marker3.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce4() {
        if (marker4.getAnimation() !== null) {
            marker4.setAnimation(null);
        } else {
            marker4.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker4.open(map, marker4);
            setTimeout(function(){
                marker4.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce5() {
        if (marker5.getAnimation() !== null) {
            marker5.setAnimation(null);
        } else {
            marker5.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker5.open(map, marker5);
            setTimeout(function(){
                marker5.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce6() {
        if (marker6.getAnimation() !== null) {
            marker6.setAnimation(null);
        } else {
            marker6.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker6.open(map, marker6);
            setTimeout(function(){
                marker6.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce7() {
        if (marker7.getAnimation() !== null) {
            marker7.setAnimation(null);
        } else {
            marker7.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker7.open(map, marker7);
            setTimeout(function(){
                marker7.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce8() {
        if (marker8.getAnimation() !== null) {
            marker8.setAnimation(null);
        } else {
            marker8.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker8.open(map, marker8);
            setTimeout(function(){
                marker8.setAnimation(null); 
            }, 2200);
        }
    }

    function toggleBounce9() {
        if (marker9.getAnimation() !== null) {
            marker9.setAnimation(null);
        } else {
            marker9.setAnimation(google.maps.Animation.BOUNCE);
            infoWindowMarker9.open(map, marker9);
            setTimeout(function(){
                marker9.setAnimation(null); 
            }, 2200);
        }
    }

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var markerMyPosition = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });

            markerMyPosition.addListener('click', setMyInfo);

            function setMyInfo(){
                infoWindow.setPosition(pos);
                infoWindow.setContent('Você está aqui!');
                infoWindow.open(map, markerMyPosition);
                if (markerMyPosition.getAnimation() !== null) {
                    markerMyPosition.setAnimation(null);
                } else {
                    markerMyPosition.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(function(){
                        markerMyPosition.setAnimation(null); 
                    }, 2200);
                }
            }

            map.setCenter(pos);
        }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
          });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}