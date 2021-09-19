<script>
    let RedFoxOne = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimage" + 
        "s%2Fartworkimages%2Fmediumlarge%2F1%2Fhappy-fox-is-happy-roeselien-raimond.jpg&f=1&nofb=1";
    let RedFoxTwo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F322%2Ft" + 
        "humb-1920-322736.jpg&f=1&nofb=1";
    let RedFoxSrc1 = "https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Red-Fox";
    let RedFoxSrc2 = "https://en.wikipedia.org/wiki/Red_fox";
    let SilverFoxOne = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sciencenews.org%2Fwp-conte" +
        "nt%2Fuploads%2F2019%2F12%2F121719_JB_fox-domestication_feat-1028x579.jpg&f=1&nofb=1";
    let SilverFoxTwo = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-MxLYrDccfX" + 
        "w%2FT6cdc2VxN2I%2FAAAAAAAABSA%2FeM5y-NlX9LU%2Fs1600%2FSilberfuchs_06.jpg&f=1&nofb=1";
    let SilverFoxSrc = "https://en.wikipedia.org/wiki/Silver_fox_(animal)";
    let ArticFoxOne = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-X17BueaHM9o%" + 
        "2FUMn4aoWKhNI%2FAAAAAAAAPDk%2F4zlyQyy2SjE%2Fs1600%2FArctic%2BFox%2BWallpapers%2B02.jpg&f=1&nofb=1";
    let ArcticFoxTwo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-By125vSR5b" + 
        "E%2FUsTu3KuUsqI%2FAAAAAAAANiE%2FBx1rRujnLac%2Fs2560-d%2Fsnow-fox-picture-hd-wallpaper-image-1920x1080.jpg&f=1&nofb=1";
    let ArcticFoxSrc = "https://en.wikipedia.org/wiki/Arctic_fox";
    let FennecFoxOne = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOI" + 
        "P.AtAxInXikmmF_vO3uWsusAHaFJ%26pid%3DApi&f=1";
    let FennecFoxTwo = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-VJ5owzuknbY" + 
        "%2FTvVuzgkixlI%2FAAAAAAAAD6o%2FUEHvoetRzV4%2Fs1600%2FFennec-Fox-04.jpg&f=1&nofb=1";
    let FennecFoxSrc = "https://en.wikipedia.org/wiki/Fennec_fox";
    let PageId = 0;
</script>                             

<head>
    <title>The Best Foxes</title>
    <meta name="veiwport" content="width=device-width, initial-scale=1.0">
</head>

<div id="page">
    <div id="bar" class="text-center sticky">
        <span>
            <div class="sbutton cbar" on:click="{e => PageId = 0}">
                <a href="#mainPicture">Red Foxes</a>
            </div>
            <div class="sbutton cbar" on:click="{e => PageId = 1}">
                <a href="#mainPicture">Silver Foxes</a>
            </div>
            <div class="sbutton cbar" on:click="{e => PageId = 2}">
                <a href="#mainPicture">Arctic Foxes</a>
            </div>
            <div class="sbutton cbar" on:click="{e => PageId = 3}">
                <a href="#mainPicture">Fennec Foxes</a>
            </div>
        </span>
    </div>
    <div id="content">
        <div id="mainPicture">
            {#if PageId == 0}
                    <img src={RedFoxOne} alt="A very happy Red Fox">
            {:else if PageId == 1}
                <img src={SilverFoxOne} alt="A very happy Silver Fox">
            {:else if PageId == 2}
                <img src={ArticFoxOne} alt="A very happy Artic Fox">
            {:else}
                <img src={FennecFoxOne} alt="A very happy Fennec Fox">
            {/if}
        </div>

        <div id="dividerLine"> </div> <!-- Used to create a line after the picture -->
        
        <div id="info" class="">
            {#if PageId == 0}
                <div class="inner block justify-items-center">
                    <div>
                        <strong><em>Vulpes vulpes</em></strong>
                        <br><br>
                        <p>
                            <strong>Red Foxes</strong> are some of the most widely spread of <em>Order Carnivora</em><br>
                            having a presence in many areas across the world.<br> They have tended to thrive alongside
                            humans instead of being harmed.
                        </p>
                        <br>
                        <p>
                            Red Foxes are primaraly carnivorous animals, who tend to hunt for smaller game animals<br>
                            While most animals were harmed by the expansion of cities, Red Foxes can survivie<br>
                            and hunt in a variety of different locales, this has allowed them to live close to humans.<br>
                        </p>
                        <br>
                        <p>
                            Some places see Foxes as a species which is a pest or should be avoided, Foxes are not hostile,<br>
                            and try to avoid confrontation. Although, the presence of Red Foxes in Australia caused them to<br>
                            start endangering local populations of wildilfe.<br>
                        </p>
                        <br>
                        <p>
                            Red Foxes have a triangular shaped face, with a pointed snout. Their ears are pointed and have black<br>
                            tips. Along with that, their legs are usually black. Red Foxes have large bushy tails with white tips.<br>
                            Most of their fur will be orange, with the potential for some shades of grey as well, their chest will <br>
                            usually be a shade of off white.<br>
                        </p>

                        <strong><h5>A picture of a Red Fox, showing all of the features of this type</h5></strong>
                        <img src={RedFoxTwo} alt="The features of a red fox" class="imgTwo"/>

                        <div class="container">
                            <div class="referencesEct">
                                <strong><h5>The References for this page</h5></strong>
                                <h3>Images</h3>
                                <p>
                                    - <a href="{RedFoxOne}">The first image</a> <br>
                                    - <a href="{RedFoxTwo}">The second image</a>
                                </p>
                                <h3>Sources</h3>
                                <p>
                                    - <a href="{RedFoxSrc1}">The National Wildlife Federation</a> <br>
                                    - <a href="{RedFoxSrc2}">Wikipedia</a>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            {:else if PageId == 1}
                <div class="inner block justify-items-center">
                    <div>
                        <strong><em>Vulpes vulpes</em></strong>

                        <p>
                            The <strong>Silver Fox</strong> is not actually a different member of the <em>Vulpes</em> family, more <br>
                            accurately they are really Red Foxes with more melanin content then other Red Foxes.<br> Silver Foxes are just
                            as widespread and adaptive as their red counterparts.
                        </p>
                        <br>
                        <p>
                            Due to Silver Foxes being a coloration of Red Foxes, they tend to exhibit the same<br> Predatory patterns as
                            Red Foxes. But one difference that Silver Foxes have is their <br> increase in cautiousness.
                        </p>
                        <br>
                        <p>
                            Silver Foxes can have anywhere from a darker grey to jet black coat, they exhibit the <br>
                            same white tipped tail that Red Foxes have. Their fur can also be bluish in color 
                        </p>
                        <br>
                        
                        <strong><h5>A picture of a Silver Fox, showing all of the features of this type</h5></strong>
                        <img src="{SilverFoxTwo}" alt="A Silver Fox with the described attributes"/>

                        <div class="container">
                            <div class="referencesEct">
                                <strong><h5>The References for this page</h5></strong>
                                <h3>Images</h3>
                                <p>
                                    - <a href="{SilverFoxOne}">The first image</a> <br>
                                    - <a href="{SilverFoxTwo}">The second image</a>
                                </p>
                                <h3>Sources</h3>
                                <p>
                                    - <a href="{SilverFoxSrc}">Wikipedia</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {:else if PageId == 2}
                <div class="inner block justify-items-center">
                    <div>
                        <strong><em>Vulpes lagopus</em></strong>
                        <br>
                        <p>
                            Arctic Foxes are smaller white coated foxes that are native to cooler areas, due to this they are <br>
                            specially adapted to survive in this habitat. 
                        </p>
                        <br>
                        <p>
                            These foxes prey on smaller creatures, such as lemmings, voles, ringed seal pups, ect. .<br>
                            This has earned them the nickname Lemming Foxes. They also produce the most offspring <br>
                            of the fox genus.
                        </p>
                        <br>
                        <p>
                            Arctic Foxes are identified by their white coat, which is the thickest of any fox. Another feature <br>
                            is their smaller ears and shorter muzzle. Their compact bodies help them to maintain heat.
                        </p>
                        <br>
                        
                        <strong><h5>A picture of a Arctic Fox, showing all of the features of this type</h5></strong>
                        <img src="{ArcticFoxTwo}" alt="An Arctic Fox displaying all of the characteristics"/>

                        <div class="container">
                            <div class="referencesEct">
                                <strong><h5>The References for this page</h5></strong>
                                <h3>Images</h3>
                                <p>
                                    - <a href="{ArticFoxOne}">The first image</a> <br>
                                    - <a href="{ArcticFoxTwo}">The second image</a>
                                </p>
                                <h3>Sources</h3>
                                <p>
                                    - <a href="{ArcticFoxSrc}">Wikipedia</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
                <div class="inner block justify-items-center">
                    <div>
                        <strong><em>Vulpes zerda</em></strong>
                        <br>
                        <p>
                            Fennec Foxes are a smaller breed of fox that are native to the Sahara Desert, and <br>
                            some portions of Northern Africa. They are the smallest canid species, which consists of <br>
                            dogs and other dog like animals.
                        </p>
                        <br>
                        <p>
                            These Foxes are omnivorous, feeding on small rodents as well as any available plants.
                        </p>
                        <br>
                        <p>
                            The Fennec Fox is tan colored, and is very small. Their most notable feature is their <br>
                            almost disproportionate ears, which they use to dispell heat when needed. <br>
                            It also uses these ears for locating prey beneath the sand.
                        </p>
                        <br>

                        <strong><h5>A picture of a Fennec Fox, showing all of the features of this type</h5></strong>
                        <img src="{FennecFoxTwo}" alt="A Fennec Fox displaying all of the characteristics">
                        <div class="container">
                            <div class="referencesEct">
                                <strong><h5>The References for this page</h5></strong>
                                <h3>Images</h3>
                                <p>
                                    - <a href="{FennecFoxOne}">The first image</a> <br>
                                    - <a href="{FennecFoxTwo}">The second image</a>
                                </p>
                                <h3>Sources</h3>
                                <p>
                                    - <a href="{FennecFoxSrc}">Wikipedia</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    * {
        width: 100vw;
        max-width: 100%;  /* This one is special, it prevents horizontal scroll when a vertical scrollbar is present */
        background-color: #73cbe5;
    }

    /* NavBar */
    #bar {
        width: 100vw;
        border-bottom: solid;
        border-left: hidden;
        border-right: hidden;
        border-top: hidden; 
        border-width: 7px;
        border-bottom-color: rgb(56, 53, 50);
    }  
    #bar div {
        float: left;
        padding: 0, 0px;
        max-width: 25%;
    } 
    /* I will admit, i dont know everything this does */
    #bar.sticky { 
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: rgb(87, 80, 74);
        padding: 40px;
        font-size: 25px;
    }
    .cbar {
        border: solid;
        border-radius: 7px;
        background-color: silver;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .cbar a { background-color: inherit; /* From .cbar */ }

    /* Picture Box */
    #mainPicture img {
        display: block;
        margin: auto;
        height: 100%;
        width: auto;

    }
    #mainPicture {
        height: 60vh;
        background-color: #73cbe5;
    }
    
    /* This is the line dividing the first section, and the rest of the page */
    #dividerLine {
        border: solid;
        border-color: rgba(150, 150, 150, 0.5);
        width: 100vw;
        margin-bottom: 30px;
    }

    #info {
        width: 100vw;
        height: 100%;
        background-color: inherit;  /* from '*' */
        display: flex;
        justify-content: center;
    }
    #info img {
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
    }
    .inner {
        width: 55vw;
        border: solid;
        border-width: 7px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        background-color: inherit;
    }
    .inner div {
        margin-top: 50px;
        text-align: center;
    }
    .inner .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* References */
    .referencesEct {
        width: 65%;
        text-align: left !important;
        padding: 9px;

        border: solid;
        border-color: rgba(150, 150, 150, 0.5);
        border-width: 7px;
    }
    .referencesEct a {
        color: blue;
        text-decoration: underline;
    }
</style>
