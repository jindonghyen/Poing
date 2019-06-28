<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	

<div id="header">
<!-- navgation -->
<div id="nav_wrap_shading"></div>
	<div id="nav_wrap" class="fixed">
		<div class="container_wrap">
			<div id="nav_container" class="">
				<div id="nav_shading" class="shading_bg scroll_enable"></div>
				<!-- logo section -->
				<a id="nav_logo" href="/Poing/main.do"><img class="logo"
					src="/Poing/upload/mainpage/logo.png"></a>

				<div id="nav_city">
					<span>서울 / 수도권</span> <i class="icon"></i>
					<ul>
						<li data-city="seoul" data-enable="true">서울 / 수도권</li>
						<li data-city="busan" data-enable="true">부산</li>
						<li data-city="jeju" data-enable="true">제주</li>
						<li data-city="daegu" data-enable="true">대구</li>
						<li data-city="daejeon" data-enable="true">대전 / 세종</li>
						<li data-city="gwangju" data-enable="true">광주</li>
						<li data-city="jeonju" data-enable="false">전주</li>
						<li data-city="ulsan" data-enable="false">울산</li>
					</ul>
				</div>

				<!-- area search section -->
				<div id="nav_area" class="search sel">
					<div class="input">
						<div class="selected">지역 선택</div>
						<i class="icon searchbox arrow"></i>
					</div>
					<div class="box">
						<ul class="district">
							<li data-dist="6914b4770337c90465bde5e773fbd8c2" class="selected">인기지역<span>&gt;</span></li>
							<li data-dist="d50fb2f91ab75ee2564aad103c3a153e">서울<span>&gt;</span></li>
							<li data-dist="b0ef0d66131a078e03dca528a125403b">인천<span>&gt;</span></li>
							<li data-dist="9c6b19a1f8ce82fedc29a96abe90f2ea">경기<span>&gt;</span></li>
							<li data-dist="a75837780b67fbec44ee3d142074e461">지역 전체<span>&gt;</span></li>
						</ul>
						<div class="neighborhood">
							<ul class="content scroll selected" id="pop-list"
								data-dist="6914b4770337c90465bde5e773fbd8c2">
								<li><input type="checkbox"
									id="ca460332316d6da84b08b9bcf39b687b" value="1"><label
									for="ca460332316d6da84b08b9bcf39b687b">가로수길</label></li>
								<li><input type="checkbox"
									id="e06f967fb0d355592be4e7674fa31d26" value="2"><label
									for="e06f967fb0d355592be4e7674fa31d26">강남역</label></li>
								<li><input type="checkbox"
									id="9fdb62f932adf55af2c0e09e55861964" value="3"><label
									for="9fdb62f932adf55af2c0e09e55861964">건대</label></li>
								<li><input type="checkbox"
									id="c91591a8d461c2869b9f535ded3e213e" value="4"><label
									for="c91591a8d461c2869b9f535ded3e213e">경리단길</label></li>
								<li><input type="checkbox"
									id="65699726a3c601b9f31bf04019c8593c" value="5"><label
									for="65699726a3c601b9f31bf04019c8593c">광화문</label></li>
								<li><input type="checkbox"
									id="ff7d0f525b3be596a51fb919492c099c" value="6"><label
									for="ff7d0f525b3be596a51fb919492c099c">남양주</label></li>
								<li><input type="checkbox"
									id="65fc52ed8f88c81323a418ca94cec2ed" value="7"><label
									for="65fc52ed8f88c81323a418ca94cec2ed">대학로</label></li>
								<li><input type="checkbox"
									id="44968aece94f667e4095002d140b5896" value="8"><label
									for="44968aece94f667e4095002d140b5896">망원</label></li>
								<li><input type="checkbox"
									id="b139e104214a08ae3f2ebcce149cdf6e" value="9"><label
									for="b139e104214a08ae3f2ebcce149cdf6e">명동</label></li>
								<li><input type="checkbox"
									id="5bce843dd76db8c939d5323dd3e54ec9" value="10"><label
									for="5bce843dd76db8c939d5323dd3e54ec9">문래</label></li>
								<li><input type="checkbox"
									id="52d2752b150f9c35ccb6869cbf074e48" value="11"><label
									for="52d2752b150f9c35ccb6869cbf074e48">북촌</label></li>
								<li><input type="checkbox"
									id="95192c98732387165bf8e396c0f2dad2" value="12"><label
									for="95192c98732387165bf8e396c0f2dad2">분당</label></li>
								<li><input type="checkbox"
									id="11108a3dbfe4636cb40b84b803b2fff6" value="13"><label
									for="11108a3dbfe4636cb40b84b803b2fff6">상수</label></li>
								<li><input type="checkbox"
									id="6f2688a5fce7d48c8d19762b88c32c3b" value="14"><label
									for="6f2688a5fce7d48c8d19762b88c32c3b">샤로수길</label></li>
								<li><input type="checkbox"
									id="7ca57a9f85a19a6e4b9a248c1daca185" value="15"><label
									for="7ca57a9f85a19a6e4b9a248c1daca185">서래마을</label></li>
								<li><input type="checkbox"
									id="1113d7a76ffceca1bb350bfe145467c6" value="16"><label
									for="1113d7a76ffceca1bb350bfe145467c6">서촌</label></li>
								<li><input type="checkbox"
									id="e3408432c1a48a52fb6c74d926b38886" value="17"><label
									for="e3408432c1a48a52fb6c74d926b38886">성수</label></li>
								<li><input type="checkbox"
									id="7f16109f1619fd7a733daf5a84c708c1" value="18"><label
									for="7f16109f1619fd7a733daf5a84c708c1">송도</label></li>
								<li><input type="checkbox"
									id="39dcaf7a053dc372fbc391d4e6b5d693" value="19"><label
									for="39dcaf7a053dc372fbc391d4e6b5d693">압구정</label></li>
								<li><input type="checkbox"
									id="98c7242894844ecd6ec94af67ac8247d" value="20"><label
									for="98c7242894844ecd6ec94af67ac8247d">양재</label></li>
								<li><input type="checkbox"
									id="c4de8ced6214345614d33fb0b16a8acd" value="21"><label
									for="c4de8ced6214345614d33fb0b16a8acd">양평</label></li>
								<li><input type="checkbox"
									id="dd055f53a45702fe05e449c30ac80df9" value="22"><label
									for="dd055f53a45702fe05e449c30ac80df9">여의도</label></li>
								<li><input type="checkbox"
									id="f80bf05527157a8c2a7bb63b22f49aaa" value="23"><label
									for="f80bf05527157a8c2a7bb63b22f49aaa">연남</label></li>
								<li><input type="checkbox"
									id="1b36ea1c9b7a1c3ad668b8bb5df7963f" value="24"><label
									for="1b36ea1c9b7a1c3ad668b8bb5df7963f">을지로</label></li>
								<li><input type="checkbox"
									id="9d7311ba459f9e45ed746755a32dcd11" value="25"><label
									for="9d7311ba459f9e45ed746755a32dcd11">이태원</label></li>
								<li><input type="checkbox"
									id="d5c186983b52c4551ee00f72316c6eaa" value="26"><label
									for="d5c186983b52c4551ee00f72316c6eaa">익선동</label></li>
								<li><input type="checkbox"
									id="6351bf9dce654515bf1ddbd6426dfa97" value="27"><label
									for="6351bf9dce654515bf1ddbd6426dfa97">인사동</label></li>
								<li><input type="checkbox"
									id="08f90c1a417155361a5c4b8d297e0d78" value="28"><label
									for="08f90c1a417155361a5c4b8d297e0d78">일산</label></li>
								<li><input type="checkbox"
									id="b8b4b727d6f5d1b61fff7be687f7970f" value="29"><label
									for="b8b4b727d6f5d1b61fff7be687f7970f">잠실</label></li>
								<li><input type="checkbox"
									id="ef8446f35513a8d6aa2308357a268a7e" value="30"><label
									for="ef8446f35513a8d6aa2308357a268a7e">종로</label></li>
								<li><input type="checkbox"
									id="253614bbac999b38b5b60cae531c4969" value="31"><label
									for="253614bbac999b38b5b60cae531c4969">청담동</label></li>
								<li><input type="checkbox"
									id="7b7a53e239400a13bd6be6c91c4f6c4e" value="32"><label
									for="7b7a53e239400a13bd6be6c91c4f6c4e">한남동</label></li>
								<li><input type="checkbox"
									id="95e6834d0a3d99e9ea8811855ae9229d" value="33"><label
									for="95e6834d0a3d99e9ea8811855ae9229d">합정</label></li>
								<li><input type="checkbox"
									id="07811dc6c422334ce36a09ff5cd6fe71" value="34"><label
									for="07811dc6c422334ce36a09ff5cd6fe71">해방촌</label></li>
								<li><input type="checkbox"
									id="d860edd1dd83b36f02ce52bde626c653" value="35"><label
									for="d860edd1dd83b36f02ce52bde626c653">홍대</label></li>
							</ul>
							<ul class="content scroll"
								data-dist="d50fb2f91ab75ee2564aad103c3a153e">
								<li><input type="checkbox"
									id="584b98aac2dddf59ee2cf19ca4ccb75e" value="2052"><label
									for="584b98aac2dddf59ee2cf19ca4ccb75e">강남구</label></li>
								<li><input type="checkbox"
									id="4ba3c163cd1efd4c14e3a415fa0a3010" value="2116"><label
									for="4ba3c163cd1efd4c14e3a415fa0a3010">강동구</label></li>
								<li><input type="checkbox"
									id="1819932ff5cf474f4f19e7c7024640c2" value="2160"><label
									for="1819932ff5cf474f4f19e7c7024640c2">강북구</label></li>
								<li><input type="checkbox"
									id="a088ea2078cd92b0b8a0e78a32c5c082" value="2084"><label
									for="a088ea2078cd92b0b8a0e78a32c5c082">강서구</label></li>
								<li><input type="checkbox"
									id="44cd7a8f7f9f85129b9953950665064d" value="2120"><label
									for="44cd7a8f7f9f85129b9953950665064d">관악구</label></li>
								<li><input type="checkbox"
									id="801272ee79cfde7fa5960571fee36b9b" value="2092"><label
									for="801272ee79cfde7fa5960571fee36b9b">광진구</label></li>
								<li><input type="checkbox"
									id="e7e23670481ac78b3c4122a99ba60573" value="2104"><label
									for="e7e23670481ac78b3c4122a99ba60573">구로구</label></li>
								<li><input type="checkbox"
									id="a486cd07e4ac3d270571622f4f316ec5" value="2152"><label
									for="a486cd07e4ac3d270571622f4f316ec5">금천구</label></li>
								<li><input type="checkbox"
									id="e21e4e58ad9ab56e8a4634046da90113" value="2148"><label
									for="e21e4e58ad9ab56e8a4634046da90113">노원구</label></li>
								<li><input type="checkbox"
									id="9978b7063e297d84bb2ac8e46c1c845f" value="2172"><label
									for="9978b7063e297d84bb2ac8e46c1c845f">도봉구</label></li>
								<li><input type="checkbox"
									id="ef41d488755367316f04fc0e0e9dc9fc" value="2124"><label
									for="ef41d488755367316f04fc0e0e9dc9fc">동대문구</label></li>
								<li><input type="checkbox"
									id="d3a7f48c12e697d50c8a7ae7684644ef" value="2088"><label
									for="d3a7f48c12e697d50c8a7ae7684644ef">동작구</label></li>
								<li><input type="checkbox"
									id="f8c0c968632845cd133308b1a494967f" value="2060"><label
									for="f8c0c968632845cd133308b1a494967f">마포구</label></li>
								<li><input type="checkbox"
									id="54ff9e9e3a2ec0300d4ce11261f5169f" value="2080"><label
									for="54ff9e9e3a2ec0300d4ce11261f5169f">서대문구</label></li>
								<li><input type="checkbox"
									id="a96d3afec184766bfeca7a9f989fc7e7" value="2056"><label
									for="a96d3afec184766bfeca7a9f989fc7e7">서초구</label></li>
								<li><input type="checkbox"
									id="4e62e752ae53fb6a6eebd0f6146aa702" value="2136"><label
									for="4e62e752ae53fb6a6eebd0f6146aa702">성동구</label></li>
								<li><input type="checkbox"
									id="931af583573227f0220bc568c65ce104" value="2108"><label
									for="931af583573227f0220bc568c65ce104">성북구</label></li>
								<li><input type="checkbox"
									id="814a9c18f5abff398787c9cfcbf3d80c" value="2068"><label
									for="814a9c18f5abff398787c9cfcbf3d80c">송파구</label></li>
								<li><input type="checkbox"
									id="23c97e9cb93576e45d2feaf00d0e8502" value="2140"><label
									for="23c97e9cb93576e45d2feaf00d0e8502">양천구</label></li>
								<li><input type="checkbox"
									id="194cf6c2de8e00c05fcf16c498adc7bf" value="2096"><label
									for="194cf6c2de8e00c05fcf16c498adc7bf">영등포구</label></li>
								<li><input type="checkbox"
									id="6492d38d732122c58b44e3fdc3e9e9f3" value="2076"><label
									for="6492d38d732122c58b44e3fdc3e9e9f3">용산구</label></li>
								<li><input type="checkbox"
									id="a29d1598024f9e87beab4b98411d48ce" value="2112"><label
									for="a29d1598024f9e87beab4b98411d48ce">은평구</label></li>
								<li><input type="checkbox"
									id="f8bf09f5fceaea80e1f864a1b48938bf" value="2064"><label
									for="f8bf09f5fceaea80e1f864a1b48938bf">종로구</label></li>
								<li><input type="checkbox"
									id="07cb5f86508f146774a2fac4373a8e50" value="2072"><label
									for="07cb5f86508f146774a2fac4373a8e50">중구</label></li>
								<li><input type="checkbox"
									id="7dc1c7653ac42a05642a667959c12239" value="2144"><label
									for="7dc1c7653ac42a05642a667959c12239">중랑구</label></li>
							</ul>
							<ul class="content" data-dist="b0ef0d66131a078e03dca528a125403b">
								<li><input type="checkbox"
									id="41e7637e7b6a9f27a98b84d3a185c7c0" value="2168"><label
									for="41e7637e7b6a9f27a98b84d3a185c7c0">강화군</label></li>
								<li><input type="checkbox"
									id="3a1dd98341fafc1dfe9bcf36360e6b84" value="2180"><label
									for="3a1dd98341fafc1dfe9bcf36360e6b84">남동구</label></li>
								<li><input type="checkbox"
									id="0234c510bc6d908b28c70ff313743079" value="2176"><label
									for="0234c510bc6d908b28c70ff313743079">부평구</label></li>
								<li><input type="checkbox"
									id="f6e794a75c5d51de081dbefa224304f9" value="2132"><label
									for="f6e794a75c5d51de081dbefa224304f9">연수구</label></li>
								<li><input type="checkbox"
									id="cefab442b1728a7c1b49c63f1a55781c" value="1756"><label
									for="cefab442b1728a7c1b49c63f1a55781c">중구</label></li>
							</ul>
							<ul class="content scroll"
								data-dist="9c6b19a1f8ce82fedc29a96abe90f2ea">
								<li><input type="checkbox"
									id="537d9b6c927223c796cac288cced29df" value="1040"><label
									for="537d9b6c927223c796cac288cced29df">가평군</label></li>
								<li><input type="checkbox"
									id="b056eb1587586b71e2da9acfe4fbd19e" value="749"><label
									for="b056eb1587586b71e2da9acfe4fbd19e">고양시</label></li>
								<li><input type="checkbox"
									id="3dd9424294b0292b6e89ea2bba2e1144" value="2236"><label
									for="3dd9424294b0292b6e89ea2bba2e1144">고양시 일산동구</label></li>
								<li><input type="checkbox"
									id="4e2a6330465c8ffcaa696a5a16639176" value="2816"><label
									for="4e2a6330465c8ffcaa696a5a16639176">과천시</label></li>
								<li><input type="checkbox"
									id="130f1a8e9e102707f3f91b010f151b0b" value="2296"><label
									for="130f1a8e9e102707f3f91b010f151b0b">광명시</label></li>
								<li><input type="checkbox"
									id="1019c8091693ef5c5f55970346633f92" value="1044"><label
									for="1019c8091693ef5c5f55970346633f92">광주시</label></li>
								<li><input type="checkbox"
									id="1264a061d82a2edae1574b07249800d6" value="2792"><label
									for="1264a061d82a2edae1574b07249800d6">군포시</label></li>
								<li><input type="checkbox"
									id="4e2545f819e67f0615003dd7e04a6087" value="1096"><label
									for="4e2545f819e67f0615003dd7e04a6087">김포시</label></li>
								<li><input type="checkbox"
									id="b4a528955b84f584974e92d025a75d1f" value="701"><label
									for="b4a528955b84f584974e92d025a75d1f">남양주시</label></li>
								<li><input type="checkbox"
									id="4ab52371762b735317125e6446a51e8f" value="2804"><label
									for="4ab52371762b735317125e6446a51e8f">동두천시</label></li>
								<li><input type="checkbox"
									id="06997f04a7db92466a2baa6ebc8b872d" value="762"><label
									for="06997f04a7db92466a2baa6ebc8b872d">부천시</label></li>
								<li><input type="checkbox"
									id="bd5af7cd922fd2603be4ee3dc43b0b77" value="2128"><label
									for="bd5af7cd922fd2603be4ee3dc43b0b77">성남시</label></li>
								<li><input type="checkbox"
									id="eb0ecdb070a1a0ac46de0cd733d39cf3" value="2560"><label
									for="eb0ecdb070a1a0ac46de0cd733d39cf3">수원시 팔달구</label></li>
								<li><input type="checkbox"
									id="d0010a6f34908640a4a6da2389772a78" value="2808"><label
									for="d0010a6f34908640a4a6da2389772a78">안산시 단원구</label></li>
								<li><input type="checkbox"
									id="e27a949795bbe863f31c3b79a2686770" value="2796"><label
									for="e27a949795bbe863f31c3b79a2686770">안성시</label></li>
								<li><input type="checkbox"
									id="d210cf373cf002a04ec72ee395f66306" value="2788"><label
									for="d210cf373cf002a04ec72ee395f66306">안양시 동안구</label></li>
								<li><input type="checkbox"
									id="881c6efa917cff1c97a74e03e15f43e8" value="2852"><label
									for="881c6efa917cff1c97a74e03e15f43e8">양주시</label></li>
								<li><input type="checkbox"
									id="f4dd765c12f2ef67f98f3558c282a9cd" value="1052"><label
									for="f4dd765c12f2ef67f98f3558c282a9cd">양평군</label></li>
								<li><input type="checkbox"
									id="2cad8fa47bbef282badbb8de5374b894" value="2100"><label
									for="2cad8fa47bbef282badbb8de5374b894">여주시</label></li>
								<li><input type="checkbox"
									id="8b3bac12926cc1d9fb5d68783376971d" value="2868"><label
									for="8b3bac12926cc1d9fb5d68783376971d">연천군</label></li>
								<li><input type="checkbox"
									id="2bc8ae25856bc2a6a1333d1331a3b7a6" value="2832"><label
									for="2bc8ae25856bc2a6a1333d1331a3b7a6">오산시</label></li>
								<li><input type="checkbox"
									id="fa14d4fe2f19414de3ebd9f63d5c0169" value="759"><label
									for="fa14d4fe2f19414de3ebd9f63d5c0169">용인시</label></li>
								<li><input type="checkbox"
									id="6e0e24295e8a86282cb559b860416812" value="2836"><label
									for="6e0e24295e8a86282cb559b860416812">의왕시</label></li>
								<li><input type="checkbox"
									id="08fe2621d8e716b02ec0da35256a998d" value="1016"><label
									for="08fe2621d8e716b02ec0da35256a998d">의정부시</label></li>
								<li><input type="checkbox"
									id="a78482ce76496fcf49085f2190e675b4" value="2840"><label
									for="a78482ce76496fcf49085f2190e675b4">이천시</label></li>
								<li><input type="checkbox"
									id="65cc2c8205a05d7379fa3a6386f710e1" value="1020"><label
									for="65cc2c8205a05d7379fa3a6386f710e1">파주시</label></li>
								<li><input type="checkbox"
									id="7cce53cf90577442771720a370c3c723" value="1048"><label
									for="7cce53cf90577442771720a370c3c723">평택시</label></li>
								<li><input type="checkbox"
									id="0fc170ecbb8ff1afb2c6de48ea5343e7" value="2800"><label
									for="0fc170ecbb8ff1afb2c6de48ea5343e7">포천시</label></li>
								<li><input type="checkbox"
									id="1587965fb4d4b5afe8428a4a024feb0d" value="1008"><label
									for="1587965fb4d4b5afe8428a4a024feb0d">하남시</label></li>
							</ul>
							<ul class="content scroll" id="add"
								data-dist="a75837780b67fbec44ee3d142074e461">
								<li><input type="checkbox"
									id="537d9b6c927223c796cac288cced29df" value="100"><label
									for="537d9b6c927223c796cac288cced29df">가평군</label></li>
								<li><input type="checkbox"
									id="584b98aac2dddf59ee2cf19ca4ccb75e" value="101"><label
									for="584b98aac2dddf59ee2cf19ca4ccb75e">강남구</label></li>
								<li><input type="checkbox"
									id="4ba3c163cd1efd4c14e3a415fa0a3010" value="102"><label
									for="4ba3c163cd1efd4c14e3a415fa0a3010">강동구</label></li>
								<li><input type="checkbox"
									id="1819932ff5cf474f4f19e7c7024640c2" value="103"><label
									for="1819932ff5cf474f4f19e7c7024640c2">강북구</label></li>
								<li><input type="checkbox"
									id="a088ea2078cd92b0b8a0e78a32c5c082" value="104"><label
									for="a088ea2078cd92b0b8a0e78a32c5c082">강서구</label></li>
								<li><input type="checkbox"
									id="41e7637e7b6a9f27a98b84d3a185c7c0" value="105"><label
									for="41e7637e7b6a9f27a98b84d3a185c7c0">강화군</label></li>
								<li><input type="checkbox"
									id="b056eb1587586b71e2da9acfe4fbd19e" value="106"><label
									for="b056eb1587586b71e2da9acfe4fbd19e">고양시</label></li>
								<li><input type="checkbox"
									id="3dd9424294b0292b6e89ea2bba2e1144" value="107"><label
									for="3dd9424294b0292b6e89ea2bba2e1144">고양시 일산동구</label></li>
								<li><input type="checkbox"
									id="4e2a6330465c8ffcaa696a5a16639176" value="108"><label
									for="4e2a6330465c8ffcaa696a5a16639176">과천시</label></li>
								<li><input type="checkbox"
									id="44cd7a8f7f9f85129b9953950665064d" value="109"><label
									for="44cd7a8f7f9f85129b9953950665064d">관악구</label></li>
								<li><input type="checkbox"
									id="130f1a8e9e102707f3f91b010f151b0b" value="110"><label
									for="130f1a8e9e102707f3f91b010f151b0b">광명시</label></li>
								<li><input type="checkbox"
									id="1019c8091693ef5c5f55970346633f92" value="111"><label
									for="1019c8091693ef5c5f55970346633f92">광주시</label></li>
								<li><input type="checkbox"
									id="801272ee79cfde7fa5960571fee36b9b" value="112"><label
									for="801272ee79cfde7fa5960571fee36b9b">광진구</label></li>
								<li><input type="checkbox"
									id="e7e23670481ac78b3c4122a99ba60573" value="113"><label
									for="e7e23670481ac78b3c4122a99ba60573">구로구</label></li>
								<li><input type="checkbox"
									id="1264a061d82a2edae1574b07249800d6" value="114"><label
									for="1264a061d82a2edae1574b07249800d6">군포시</label></li>
								<li><input type="checkbox"
									id="a486cd07e4ac3d270571622f4f316ec5" value="115"><label
									for="a486cd07e4ac3d270571622f4f316ec5">금천구</label></li>
								<li><input type="checkbox"
									id="4e2545f819e67f0615003dd7e04a6087" value="116"><label
									for="4e2545f819e67f0615003dd7e04a6087">김포시</label></li>
								<li><input type="checkbox"
									id="3a1dd98341fafc1dfe9bcf36360e6b84" value="117"><label
									for="3a1dd98341fafc1dfe9bcf36360e6b84">남동구</label></li>
								<li><input type="checkbox"
									id="b4a528955b84f584974e92d025a75d1f" value="118"><label
									for="b4a528955b84f584974e92d025a75d1f">남양주시</label></li>
								<li><input type="checkbox"
									id="e21e4e58ad9ab56e8a4634046da90113" value="119"><label
									for="e21e4e58ad9ab56e8a4634046da90113">노원구</label></li>
								<li><input type="checkbox"
									id="9978b7063e297d84bb2ac8e46c1c845f" value="120"><label
									for="9978b7063e297d84bb2ac8e46c1c845f">도봉구</label></li>
								<li><input type="checkbox"
									id="ef41d488755367316f04fc0e0e9dc9fc" value="121"><label
									for="ef41d488755367316f04fc0e0e9dc9fc">동대문구</label></li>
								<li><input type="checkbox"
									id="4ab52371762b735317125e6446a51e8f" value="122"><label
									for="4ab52371762b735317125e6446a51e8f">동두천시</label></li>
								<li><input type="checkbox"
									id="d3a7f48c12e697d50c8a7ae7684644ef" value="123"><label
									for="d3a7f48c12e697d50c8a7ae7684644ef">동작구</label></li>
								<li><input type="checkbox"
									id="f8c0c968632845cd133308b1a494967f" value="124"><label
									for="f8c0c968632845cd133308b1a494967f">마포구</label></li>
								<li><input type="checkbox"
									id="06997f04a7db92466a2baa6ebc8b872d" value="125"><label
									for="06997f04a7db92466a2baa6ebc8b872d">부천시</label></li>
								<li><input type="checkbox"
									id="0234c510bc6d908b28c70ff313743079" value="126"><label
									for="0234c510bc6d908b28c70ff313743079">부평구</label></li>
								<li><input type="checkbox"
									id="54ff9e9e3a2ec0300d4ce11261f5169f" value="127"><label
									for="54ff9e9e3a2ec0300d4ce11261f5169f">서대문구</label></li>
								<li><input type="checkbox"
									id="a96d3afec184766bfeca7a9f989fc7e7" value="128"><label
									for="a96d3afec184766bfeca7a9f989fc7e7">서초구</label></li>
								<li><input type="checkbox"
									id="bd5af7cd922fd2603be4ee3dc43b0b77" value="129"><label
									for="bd5af7cd922fd2603be4ee3dc43b0b77">성남시</label></li>
								<li><input type="checkbox"
									id="4e62e752ae53fb6a6eebd0f6146aa702" value="130"><label
									for="4e62e752ae53fb6a6eebd0f6146aa702">성동구</label></li>
								<li><input type="checkbox"
									id="931af583573227f0220bc568c65ce104" value="131"><label
									for="931af583573227f0220bc568c65ce104">성북구</label></li>
								<li><input type="checkbox"
									id="814a9c18f5abff398787c9cfcbf3d80c" value="132"><label
									for="814a9c18f5abff398787c9cfcbf3d80c">송파구</label></li>
								<li><input type="checkbox"
									id="eb0ecdb070a1a0ac46de0cd733d39cf3" value="133"><label
									for="eb0ecdb070a1a0ac46de0cd733d39cf3">수원시 팔달구</label></li>
								<li><input type="checkbox"
									id="d0010a6f34908640a4a6da2389772a78" value="134"><label
									for="d0010a6f34908640a4a6da2389772a78">안산시 단원구</label></li>
								<li><input type="checkbox"
									id="e27a949795bbe863f31c3b79a2686770" value="135"><label
									for="e27a949795bbe863f31c3b79a2686770">안성시</label></li>
								<li><input type="checkbox"
									id="d210cf373cf002a04ec72ee395f66306" value="136"><label
									for="d210cf373cf002a04ec72ee395f66306">안양시 동안구</label></li>
								<li><input type="checkbox"
									id="881c6efa917cff1c97a74e03e15f43e8" value="137"><label
									for="881c6efa917cff1c97a74e03e15f43e8">양주시</label></li>
								<li><input type="checkbox"
									id="23c97e9cb93576e45d2feaf00d0e8502" value="138"><label
									for="23c97e9cb93576e45d2feaf00d0e8502">양천구</label></li>
								<li><input type="checkbox"
									id="f4dd765c12f2ef67f98f3558c282a9cd" value="139"><label
									for="f4dd765c12f2ef67f98f3558c282a9cd">양평군</label></li>
								<li><input type="checkbox"
									id="2cad8fa47bbef282badbb8de5374b894" value="140"><label
									for="2cad8fa47bbef282badbb8de5374b894">여주시</label></li>
								<li><input type="checkbox"
									id="f6e794a75c5d51de081dbefa224304f9" value="141"><label
									for="f6e794a75c5d51de081dbefa224304f9">연수구</label></li>
								<li><input type="checkbox"
									id="8b3bac12926cc1d9fb5d68783376971d" value="142"><label
									for="8b3bac12926cc1d9fb5d68783376971d">연천군</label></li>
								<li><input type="checkbox"
									id="194cf6c2de8e00c05fcf16c498adc7bf" value="143"><label
									for="194cf6c2de8e00c05fcf16c498adc7bf">영등포구</label></li>
								<li><input type="checkbox"
									id="2bc8ae25856bc2a6a1333d1331a3b7a6" value="144"><label
									for="2bc8ae25856bc2a6a1333d1331a3b7a6">오산시</label></li>
								<li><input type="checkbox"
									id="6492d38d732122c58b44e3fdc3e9e9f3" value="145"><label
									for="6492d38d732122c58b44e3fdc3e9e9f3">용산구</label></li>
								<li><input type="checkbox"
									id="fa14d4fe2f19414de3ebd9f63d5c0169" value="146"><label
									for="fa14d4fe2f19414de3ebd9f63d5c0169">용인시</label></li>
								<li><input type="checkbox"
									id="a29d1598024f9e87beab4b98411d48ce" value="147"><label
									for="a29d1598024f9e87beab4b98411d48ce">은평구</label></li>
								<li><input type="checkbox"
									id="6e0e24295e8a86282cb559b860416812" value="148"><label
									for="6e0e24295e8a86282cb559b860416812">의왕시</label></li>
								<li><input type="checkbox"
									id="08fe2621d8e716b02ec0da35256a998d" value="149"><label
									for="08fe2621d8e716b02ec0da35256a998d">의정부시</label></li>
								<li><input type="checkbox"
									id="a78482ce76496fcf49085f2190e675b4" value="150"><label
									for="a78482ce76496fcf49085f2190e675b4">이천시</label></li>
								<li><input type="checkbox"
									id="f8bf09f5fceaea80e1f864a1b48938bf" value="151"><label
									for="f8bf09f5fceaea80e1f864a1b48938bf">종로구</label></li>
								<li><input type="checkbox"
									id="cefab442b1728a7c1b49c63f1a55781c" value="152"><label
									for="cefab442b1728a7c1b49c63f1a55781c">중구</label></li>
								<li><input type="checkbox"
									id="07cb5f86508f146774a2fac4373a8e50" value="153"><label
									for="07cb5f86508f146774a2fac4373a8e50">중구</label></li>
								<li><input type="checkbox"
									id="7dc1c7653ac42a05642a667959c12239" value="154"><label
									for="7dc1c7653ac42a05642a667959c12239">중랑구</label></li>
								<li><input type="checkbox"
									id="65cc2c8205a05d7379fa3a6386f710e1" value="155"><label
									for="65cc2c8205a05d7379fa3a6386f710e1">파주시</label></li>
								<li><input type="checkbox"
									id="7cce53cf90577442771720a370c3c723" value="156"><label
									for="7cce53cf90577442771720a370c3c723">평택시</label></li>
								<li><input type="checkbox"
									id="0fc170ecbb8ff1afb2c6de48ea5343e7" value="157"><label
									for="0fc170ecbb8ff1afb2c6de48ea5343e7">포천시</label></li>
								<li><input type="checkbox"
									id="1587965fb4d4b5afe8428a4a024feb0d" value="158"><label
									for="1587965fb4d4b5afe8428a4a024feb0d">하남시</label></li>
							</ul>
						</div>
						<button class="confirm red_fill border_radius soft" type="button" tabindex="-1">확인</button>
					</div>
				</div>
				<!-- genre search section -->
				<div id="nav_genre" class="search sel">
					<div class="input">
						<div class="selected">음식 종류 선택</div>
						<i class="icon searchbox arrow"></i>
					</div>
					<div class="box">
						<ul class="foods content">

							<li><input type="checkbox" id="food_all"><label
								for="food_all">음식 전체</label></li>
							<li><input type="checkbox"
								id="c9f0f895fb98ab9159f51fd0297e236d" value="8"><label
								for="c9f0f895fb98ab9159f51fd0297e236d">한식</label></li>
							<li><input type="checkbox"
								id="6512bd43d9caa6e02c990b0a82652dca" value="11"><label
								for="6512bd43d9caa6e02c990b0a82652dca">양식</label></li>
							<li><input type="checkbox"
								id="37693cfc748049e45d87b8c7d8b9aacd" value="23"><label
								for="37693cfc748049e45d87b8c7d8b9aacd">중식</label></li>
							<li><input type="checkbox"
								id="c20ad4d76fe97759aa27a0c99bff6710" value="12"><label
								for="c20ad4d76fe97759aa27a0c99bff6710">일식</label></li>
							<li><input type="checkbox"
								id="b53b3a3d6ab90ce0268229151c9bde11" value="55"><label
								for="b53b3a3d6ab90ce0268229151c9bde11">아시아식</label></li>
							<li><input type="checkbox"
								id="1f0e3dad99908345f7439f8ffabdffc4" value="19"><label
								for="1f0e3dad99908345f7439f8ffabdffc4">컨템퍼러리</label></li>
							<li><input type="checkbox"
								id="1ff1de774005f8da13f42943881c655f" value="24"><label
								for="1ff1de774005f8da13f42943881c655f">뷔페</label></li>
							<li><input type="checkbox"
								id="8e296a067a37563370ded05f5a3bf3ec" value="25"><label
								for="8e296a067a37563370ded05f5a3bf3ec">구이</label></li>
							<li><input type="checkbox"
								id="45c48cce2e2d7fbdea1afc51c7c6ad26" value="9"><label
								for="45c48cce2e2d7fbdea1afc51c7c6ad26">술집</label></li>
							<li><input type="checkbox"
								id="093f65e080a295f8076b1c5722a46aa2" value="59"><label
								for="093f65e080a295f8076b1c5722a46aa2">카페/베이커리</label></li>
						</ul>

						<button class="confirm red_fill border_radius soft" type="button"
							tabindex="-1">확인</button>
					</div>
				</div>
				<!-- keyword search section -->
				<div id="nav_search" class="search">
					<input type="text" class="border_radius soft" value=""> <i
						class="icon glass"></i> <img id="nav_loader"
						src="http://c1.poing.co.kr/original/images/nav_loader.gif">

					<!-- recommend section -->
					<div id="nav_recommend" class="border_radius soft">
						<ul class="keyword">
							<li class="title">인기 검색어</li>
							<li class="item"><i class="icon number1"></i> <span
								class="area">스시 오마카세</span></li>
							<li class="item"><i class="icon number2"></i> <span
								class="area">파스타</span></li>
							<li class="item"><i class="icon number3"></i> <span
								class="area">스테이크</span></li>
						</ul>
						
						<ul class="recent">
							<li class="title">최근 본 매장
								<div>
									<i class="icon arrow xs prev"></i>
									<span class="page">1</span>
									<span class="totalpage_head"></span>
									<i class="icon arrow xs next"></i>
								</div>
							</li>
							<!-- <li class="item" data-id="30748"><span>와이스타일 (서래마을점)</span></li> -->
						</ul>
						<script>
							function setCookie(name, value, exdays) {
								var now = new Date();
								now.setDate(now.getDate() + exdays);
								now.setTime(now.getTime() + 1000*10) //10초 유지 추가
								//Thu, 18 Apr 2019 01:33:39 GMT
								document.cookie = name + "=" + escape(value) + "; expires=" + now.toUTCString() + "; path=/;";
								//localhost도메인에안, 모든 웹 어플리케이션에서 사용하겠다면 path=/
							}
	
							function getCookie(name) {
								var cookies = document.cookie;
								var carr = cookies.split("; ");
								var result = "";
								for (let i = 0; i < carr.length; i++) {
									var rarr = carr[i].split("=");
									if (rarr[0] == name) {
										return unescape( rarr[1] );
									}
								}
								return null;
							}
							
							var restlist = JSON.parse(getCookie("restlist"));
							var page = Math.ceil(restlist.length/5);
							$("span.totalpage_head").html(page);
							$recent_rest_list = $("#nav_recommend > ul.recent");
							for (var i = 0; i < restlist.length; i++) {
								$li = $("<li>", {"class":"item", "data-id":restlist[i].rest_seq});
								$li.append("<span>"+restlist[i].rest_name+"</span>");
								$recent_rest_list.append($li);
							}
						</script>
					</div>
					<!-- auto_complete section -->
					<div id="nav_auto_complete" class="border_radius soft"></div>
				</div>
				<button type="button" id="nav_btn" class="search" tabindex="-1">검색</button>
				<!-- account section -->
				<c:if test="${empty authUser}">
					<div id="nav_account">
						<div id="nav_guest">
							<span id="nav_login">로그인</span> &nbsp;|&nbsp; <span id="nav_join">회원가입</span>
						</div>
					</div>
				</c:if>
				<c:if test="${not empty authUser}">
					<div id="nav_account">
						<div id="nav_user">
							<div id="nav_cart" class="underline">
								<div class="i_wrap">
									<i class="icon cart"></i>
								</div>
							</div>
							<div id="nav_notice" class="underline">
								<div class="i_wrap">
									<i class="icon notice"></i>
								</div>
								<div id="nav_notice_list" class="border_radius soft"
									style="display: none;">
									<div id="nav_notice_list_tab">
										소식 <span> <span id="nav_mynews_btn" class="selected">
												<span>내 소식</span>
										</span> <span id="nav_poingnews_btn"> <span>포잉 알림</span>
										</span>
										</span>
									</div>
									<div id="nav_notice_list_content">
										<div id="nav_mynews_list"></div>
										<div id="nav_poingnews_list"></div>
									</div>
									<div id="nav_notice_list_all">모든 소식보기</div>
								</div>
							</div>
							<div id="nav_profile" class="underline">
								<div class="i_wrap">
									<i class="profile_image border_radius circle"
										style="background-image: url(${realPath}${ authUser.m_img ne null ? authUser.m_img : applicationScope.baseprofile })"></i>
									<div class="hover border_radius circle">MY</div>
								</div>
								<div id="nav_profile_list" class="border_radius soft">
									<div class="item" data-link="/Poing/timeline.do?id=${ authUser.m_seq }&tab=reservation">예약</div>
									<div class="item" data-link="/Poing/timeline.do?id=${ authUser.m_seq }&tab=coupon">티켓</div>
									<div class="item" data-link="/Poing/timeline.do?id=${ authUser.m_seq }&tab=payment">결제</div>
									<div class="item" data-link="/Poing/timeline.do?id=${ authUser.m_seq }&tab=setting">설정</div>
									<div id="nav_logout" class="item">로그아웃</div>
								</div>
							</div>
						</div>
					</div><!-- nav_account -->
				</c:if>
			</div>
		</div>
		<!-- menu section -->
	</div>
	<!-- //navgation -->
</div>
 