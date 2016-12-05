function addMarker(){

	if(!(sessionStorage.getItem('nomeprojeto'))){
		sessionStorage.setItem('nome'			,document.getElementById("nome").value);
		sessionStorage.setItem('nomeprojeto'	,document.getElementById("nomeprojeto").value);
		sessionStorage.setItem('oquefaz'		,document.getElementById("oquefaz").value);
		sessionStorage.setItem('latitude'		,document.getElementById("latitude").value);
		sessionStorage.setItem('longitude'		,document.getElementById("longitude").value);
		sessionStorage.setItem('telefone'		,document.getElementById("telefone").value);
		sessionStorage.setItem('foto'			,document.getElementById("foto").value);

	 	console.log("sessionStorage.getItem('nome') = " + sessionStorage.getItem('nome'));
	 	console.log("sessionStorage.getItem('oquefaz') = " + sessionStorage.getItem('oquefaz'));
	 	console.log("sessionStorage.getItem('nomeprojeto') = " + sessionStorage.getItem('nomeprojeto'));
	 	console.log("sessionStorage.getItem('latitude') = " + sessionStorage.getItem('latitude'));
	 	console.log("sessionStorage.getItem('longitude') = " + sessionStorage.getItem('longitude'));
	 	console.log("sessionStorage.getItem('telefone') = " + sessionStorage.getItem('telefone'));
	 	console.log("sessionStorage.getItem('foto') = " + sessionStorage.getItem('foto'));

	 	alert("Seu projeto foi adicionado com sucesso.");

	}else{
		if(!(sessionStorage.getItem('nomeprojeto2'))){
			sessionStorage.setItem('nome2'			,document.getElementById("nome").value);
			sessionStorage.setItem('nomeprojeto2'	,document.getElementById("nomeprojeto").value);
			sessionStorage.setItem('oquefaz2'		,document.getElementById("oquefaz").value);
			sessionStorage.setItem('latitude2'		,document.getElementById("latitude").value);
			sessionStorage.setItem('longitude2'		,document.getElementById("longitude").value);
			sessionStorage.setItem('telefone2'		,document.getElementById("telefone").value);
			sessionStorage.setItem('foto2'			,document.getElementById("foto").value);

		 	console.log("sessionStorage.getItem('nome2') = " + sessionStorage.getItem('nome'));
		 	console.log("sessionStorage.getItem('oquefaz2') = " + sessionStorage.getItem('oquefaz'));
		 	console.log("sessionStorage.getItem('nomeprojeto2') = " + sessionStorage.getItem('nomeprojeto'));
		 	console.log("sessionStorage.getItem('latitude2') = " + sessionStorage.getItem('latitude'));
		 	console.log("sessionStorage.getItem('longitude2') = " + sessionStorage.getItem('longitude'));
		 	console.log("sessionStorage.getItem('telefone2') = " + sessionStorage.getItem('telefone'));
		 	console.log("sessionStorage.getItem('foto2') = " + sessionStorage.getItem('foto'));

		 	alert("Seu projeto foi adicionado com sucesso.");

		 }else{
		 	if(!(sessionStorage.getItem('nomeprojeto3'))){
				sessionStorage.setItem('nome3'			,document.getElementById("nome").value);
				sessionStorage.setItem('nomeprojeto3'	,document.getElementById("nomeprojeto").value);
				sessionStorage.setItem('oquefaz3'		,document.getElementById("oquefaz").value);
				sessionStorage.setItem('latitude3'		,document.getElementById("latitude").value);
				sessionStorage.setItem('longitude3'		,document.getElementById("longitude").value);
				sessionStorage.setItem('telefone3'		,document.getElementById("telefone").value);
				sessionStorage.setItem('foto3'			,document.getElementById("foto").value);

			 	console.log("sessionStorage.getItem('nome3') = " + sessionStorage.getItem('nome'));
			 	console.log("sessionStorage.getItem('oquefaz3') = " + sessionStorage.getItem('oquefaz'));
			 	console.log("sessionStorage.getItem('nomeprojeto3') = " + sessionStorage.getItem('nomeprojeto'));
			 	console.log("sessionStorage.getItem('latitude3') = " + sessionStorage.getItem('latitude'));
			 	console.log("sessionStorage.getItem('longitude3') = " + sessionStorage.getItem('longitude'));
			 	console.log("sessionStorage.getItem('telefone3') = " + sessionStorage.getItem('telefone'));
			 	console.log("sessionStorage.getItem('foto3') = " + sessionStorage.getItem('foto'));

			 	alert("Seu projeto foi adicionado com sucesso.");
		 	}
		 }
	}


}