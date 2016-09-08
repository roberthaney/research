//arrays with text for pages
var overviewText = [
"<p>My research explores the panoply of products of biological evolution, typically from a molecular genetic perspective, in a range of disparate, but in their own ways fascinating, organisms.</p>", 
"<p>I employ a range of molecular biological and computational tools and techniques to obtain and analyze data that ranges from the level of the gene, to that of the genome.</p>",
"<p>I strive to use molecular genetic data in an integrative manner with phenotypic data to obtain a clearer picture of how organisms function and evolve.</p>"
];

var popgenText= [
"<li id='imglistelem'>Geographical variation in individual traits within species had long been noted by naturalists.</li>",
"<li id='imglistelem'>The distribution of genetic variation also varies across geography, and through time, and can be explored through the use of molecular markers.</li>",
"<li id='imglistelem'>I have investigated the genetic structure of populations within species, and explored the role of genetic drift, historical demography and selection on genetic variation.</li>",
];

var transcriptomicText = [
 "<li>My work in transcriptomics focuses on spiders, using next-generation sequencing technologies to categorize gene expression at the whole transcriptome level.</li>",
 "<li>The identification of genes with tissue specific expression has expanded our understanding of venom and silk gland function, and discovered novel toxins in the black widow and relatives.</li>",
 "<li>Categorizing regulatory motifs and investigating their occurrence in promoters of tissue-specifically expressed genes can further our understanding of gene regulation and regulatory evolution.</li>"
];

var transcriptomicsimg1text = [
  "<li id='imglistelem'><em>We employed RNA-Seq across multiple tissues to characterize transcriptomes in several species of the spider Family Theridiidae</em></li>",
  "<li id='imglistelem'><em>By comparing these tissue transcriptomes, we were able to identify transcripts with strongly tissue-biased expression.</em></li>",
  "<li id='imglistelem'><em>Hundreds of transcripts have expression strongly biased towards the venom gland in widow and house spiders.</em></li>",
  "<li id='imglistelem'><em>These include many potential novel toxins derived from multiple types of proteins.</em></li>"
];

var transcriptomicsimg2text = [
  "<li id='imglistelem'><em>Among these potential toxins are new forms of cysteine rich mini-proteins with a structural motif common to toxins from other venomous animal taxa.</em></li>",
  "<li id='imglistelem'><em>Differing sequence and cysteine positions may indicate targeting of distinct synaptic ion channels.</em></li>"
];

var venomevointroText = [
  "<li id='imglistelem'>Venom is a key feature of spider ecology, used in defense and prey acquisition, and is a complex mixture of molecules including proteins and peptides.</li>",
  "<li id='imglistelem'>In theridiid spiders, like the Western black widow (left), it is used in conjunction with silk to immobilize prey.</li>",
  "<li id='imglistelem'>Black widow venom contains atypically large presynaptic neurotoxins, called latrotoxins.</li>"
];

var venomevoex1Text = [
  "<li id='imglistelem'><em>RNA-Seq analysis of the venom gland found numerous new latrotoxins, greatly expanding the diversity of this toxin family.</em></li>",
  "<li id='imglistelem'><em>Extensive protein sequence divergence suggests the possibility of functional diversification in newly discovered latrotoxins.</em></li>",
  "<li id='imglistelem'><em>Different latrotoxins target different organisms, and the expanded diversity of latrotoxins could exhibit specificity for other species.</em></li>"
];

//data for images and modal text
var pgarea1modaltext = "<p>Mitochondrial and nuclear gene sequences revealed differentiation among regions reflecting isolation in glacial refugia (top), but minimal differentiation among European morphotypes (bottom).</p>";
var pgarea2modaltext = "<p>Bayesian phylogeny based on mitochondrial data shows deep divergences within the estuarine fish species <em>C. variegatus</em> (colored clade labels), and non-monophyly of <em>Cyprinodon</em> species.</p>";
var pgarea3modaltext = "<p>Haplotype networks for mitochondrial coding genes in the reef fish species <em>H. bivittatus</em> show a strong signature of purifying selection, potentially confounding demographic inference.</p>";
var pgarea1img = "<div><img src='images/Haney_Taylor_2003_Fig_7.png' class='img-responsive center-block' id='pgimg1' data-toggle='modal' data-target='#invertmodal'></div>";
var pgarea2img = "<div><img src='images/cyp_tree_color.png' class='img-responsive center-block' id='pgimg2' data-toggle='modal' data-target='#cyprinodonmodal'></div>";
var pgarea3img = "<div><img src='images/Haney_et_al_2010_Fig3.jpg' class='img-responsive center-block' id='pgimg3' data-toggle='modal' data-target='#hbivmodal'></div>";
var transcriptomicsimg1 = "<figure><img src='images/Ptep_silk_vs_venom.png' class='img-responsive center-block' id='DEimage'><figcaption id='transcriptomecaption'>Differentially expressed genes in a comparison of venom gland and silk gland tissues in the common house spider</figcaption></figure>";
var transcriptomicsimg2 = "<figure><img src='images/Figure4.png' class='img-responsive center-block' id='ICKimage'><figcaption id='transcriptomecaption'>Cysteine connectivity patterns of novel inhibitory cystine knot toxins from the western black widow</figcaption></figure>";
var venomevointroimg1 = "<img src='images/Western_Black_Widow.jpg' class='img-responsive center-block' id='blackWidow'>";
var venomevoimg1 = "<figure><img src='images/Figure2.png' class='img-responsive center-block' id='venomimage'><figcaption id='venomcaption'>Phylogenetic relationships of latrotoxins</figcaption></figure>";

//append text to DOM
for (i = 0; i < overviewText.length; i++) {
  $("#overview-text").append(overviewText[i]);
};

for (i = 0; i < popgenText.length; i++) {
  $("#popgen-intro-text").append(popgenText[i]);
};

for (i = 0; i < transcriptomicText.length; i++) {
  $("#transcriptomic-intro").append(transcriptomicText[i]);
};

for (i = 0; i < venomevointroText.length; i++) {
  $("#venomevointrotext").append(venomevointroText[i]);
};

for (i = 0; i < transcriptomicsimg1text.length; i++) {
	$("#img1text").append(transcriptomicsimg1text[i]);
};

for (i = 0; i < transcriptomicsimg2text.length; i++) {
	$("#img2text").append(transcriptomicsimg2text[i]);
};

for (i = 0; i < venomevoex1Text.length; i++) {
	$("#venomevotext").append(venomevoex1Text[i]);
};

$("#modal1body").append(pgarea1modaltext);
$("#modal2body").append(pgarea2modaltext);
$("#modal3body").append(pgarea3modaltext);

//append images to DOM
$("#pgarea1").append(pgarea1img);
$("#pgarea2").append(pgarea2img);
$("#pgarea3").append(pgarea3img);
$("#img1").append(transcriptomicsimg1);
$("#img2").append(transcriptomicsimg2);
$("#venomevointroimg").append(venomevointroimg1);
$("#venomevoimg1").append(venomevoimg1);

//create publications array and add elements
var publications = [];

publications.push("<li id='pub'><strong>Haney RA</strong>, Clarke TH, Gadgil R, Fitzpatrick R, Hayashi CY, Ayoub NA, Garb JE (2016) Effects of gene duplication, positive selection, and shifts in gene expression on the evolution of the venom gland transcriptome in widow spiders. <strong>Genome Biology and Evolution</strong> 8: 228-242.</li>");
publications.push("<li id='pub'>Bhere KV, <strong>Haney RA</strong>, Ayoub NA, Garb JE (2014) Gene structure, regulatory control, and evolution of black widow venom latrotoxins. <strong>FEBS Letters</strong> 588: 3891-3897.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Ayoub NA, Clarke TH, Hayashi CY, Garb JE (2014) Dramatic expansion of the black widow toxin arsenal uncovered by multi-tissue transcriptomics and venom proteomics. <strong>BMC Genomics</strong> 15: 366. <em>Editor’s Pick. Highly Accessed.</em></li>");
publications.push("<li id='pub'> Clarke TH, Garb JE, Hayashi CY, <strong>Haney RA</strong>, Lancaster AK, Corbett S,  Ayoub NA (2014) Multi-tissue transcriptomics of the black widow spider reveals expansions, co-options, and functional processes of the silk gland gene toolkit. <strong>BMC Genomics</strong> 15: 365.</li>");
publications.push("<li id='pub'>Díaz-Ferguson E, <strong>Haney RA</strong>, Wares JP, Silliman BR (2012) Genetic structure and connectivity patterns of two Caribbean rocky intertidal gastropods. <strong>Journal of Molluscan Studies</strong> 78: 112-118.</li>");
publications.push("<li id='pub'>Díaz-Ferguson E, <strong>Haney RA</strong>, Wares JP Silliman BR (2010) Population genetics of a trochid gastropod broadens picture of Caribbean sea connectivity. <strong>PLoS One</strong> 5: e12675.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Silliman BR, Rand DM (2010) Effects of selection and mutation on mitochondrial variation and inferences of historical population expansion in a Caribbean reef fish. <strong>Molecular Phylogenetics and Evolution</strong> 57: 821-828.</li>");
publications.push("<li id='pub'>Tian S, <strong>Haney RA</strong>, Feder ME (2010) Phylogeny disambiguates the evolution of heat-shock <em>cis</em>-regulatory elements in <em>Drosophila</em>. <strong>PLoS One</strong> 5: e10669.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Feder ME (2009) Contrasting patterns of transposable element insertions in <em>Drosophila</em> heat-shock promoters. <strong>PLoS One</strong> 4: e8486.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Turner BJ, Rand DM (2009) A cryptic lineage within the pupfish <em>Cyprinodon dearborni</em> suggests multiple colonizations of South America. <strong>Journal of Fish Biology</strong> 75: 1108-1114.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Dionne M, Puritz J, Rand DM (2009) The comparative phylogeography of east coast estuarine fishes in formerly glaciated sites: persistence versus recolonization in <em>Cyprinodon variegatus ovinus</em> and <em>Fundulus heteroclitus macrolepidotus</em>. <strong>Journal of Heredity</strong> 100: 284-296.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Silliman BR, Fry AJ, Layman CA, Rand DM (2007) The Pleistocene history of the sheepshead minnow (<em>Cyprinodon variegatus</em>): non-equilibrium evolutionary dynamics within a diversifying species complex. <strong>Molecular Phylogenetics and Evolution</strong> 43: 743-754.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Silliman BR, Rand DM (2007) A multi-locus assessment of connectivity and historical demography in the bluehead wrasse (<em>Thalassoma bifasciatum</em>). <strong>Heredity</strong> 98: 294-302. </li>");
publications.push("<li id='pub'>Sanford E, Holzman SB, <strong>Haney RA</strong>, Rand DM, Bertness MD (2006) Thermal tolerance of larvae regulates the northern geographic range limit of fiddler crabs. <strong>Ecology</strong> 87: 2882-2894.</li>");
publications.push("<li id='pub'>Rand DM, <strong>Haney RA</strong>, Fry AJ (2004) Cytonuclear coevolution: the genomics of cooperation. <strong>Trends in Ecology and Evolution</strong> 19: 645-653.</li>");
publications.push("<li id='pub'>Sackton TB, <strong>Haney RA</strong>, Rand DM (2003) Cytonuclear coadaptation in <em>Drosophila</em>: disruption of cytochrome c oxidase activity in backcross genotypes. <strong>Evolution</strong> 57: 2315-2325.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Taylor DJ (2003) Testing paleolimnological predictions with molecules: the origins of Holarctic <em>Bosmina</em>. <strong>Journal of Evolutionary Biology</strong> 16: 871-882.</li>");
publications.push("<li id='pub'>Kim K, Sheets HD, <strong>Haney RA</strong>, Mitchell CE (2002) Morphometric analysis of ontogeny and allometry of the Middle Ordovician trilobite <em>Triarthrus becki</em>. <strong>Paleobiology</strong> 28: 364-377. </li>");
publications.push("<li id='pub'>Taylor DJ, Ishikane CR, <strong>Haney RA</strong> (2002) The systematics of Holarctic bosminids and a revision that reconciles molecular and morphological evolution. <strong>Limnology and Oceanography</strong> 47: 1486-1495.</li>");
publications.push("<li id='pub'><strong>Haney RA</strong>, Mitchell CE, Kim K (2001) Geometric morphometric analysis of patterns of shape change in the Ordovician brachiopod <em>Sowerbyella</em>. <strong>PALAIOS</strong> 16: 113-123. </li>");

//add publications to overview panel
var mypubs = $("#allpubs");
for (i = 0; i < publications.length; i++) {
	mypubs.append(publications[i]);
};
