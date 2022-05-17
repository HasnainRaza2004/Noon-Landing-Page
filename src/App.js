import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function App() {
  return (
    <div className="App">
      <header  className="App-header">
      <AppBar  style={{ background:"yellow" }}>
        <Toolbar>

<a href='#'><img src='https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg'></img></a>



 <div sx={{color : "black" }} className='contrySelection'>
 <img style={{color : "black" , marginLeft : 30 , marginTop : 15 }} width = {"40"} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAJ1BMVEX///8AAAD/AAAAcy8AahalAAClSx8AdjD/paWfRQ4AbRj/qKmfAABGcDiwAAABeElEQVR4nO3cSRHDQBAEQfmUL/54DSInpMdWMugC0Nt11nO/rWQrnygfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR+Zzvf+3Fcyne+7rWU43+vsPQcrHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfKR8pHykfGc7XlwH5XZYyne9x9qBjlY+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SPlI+Uj5SP/AFt7y0NwnYeWgAAAABJRU5ErkJggg=='></img>
 <span style={{color : "black" , marginLeft : 20 }} for="location">Deliver to: </span><br></br>
 <span style={{color : "black" , marginLeft : 90 ,marginRight:5 }} >Dubai</span>
 <select  name="location" id="location">
</select>
 <br></br>

 </div>

 <TextField  placeholder='What are you looking for?' size="small" sx={{ background:"white", width: 900 , maxWidth: '100%', ml : 10  }}></TextField>
 <a style={{textDecoration : "none"}}  href='#'><Typography sx={{color : "black" , ml : 3 }}>Sign In<PersonOutlineOutlinedIcon sx={{ ml : 1 , mr : 1 }}/>|</Typography></a>
 <a style={{textDecoration : "none"}}  href='#'><Typography sx={{color : "black" , ml : 3 , mt : 1 }}>Cart<ShoppingCartOutlinedIcon sx={{ ml : 1 , mr : 1 }}/></Typography></a> 
      </Toolbar>
      </AppBar>
      </header>


      <Toolbar>
{/* <div className='categorySection'>
<Typography><a href='#'>All CATEGORIES</a></Typography><span><a href=''><ArrowDropDownIcon></ArrowDropDownIcon></a></span>
<label for="Category">All CATEGORIES</label>

<select name="Category" id="Category">
  <option value="Electronics & Mobiles">Electronics & Mobiles</option>
  <option value="Beauty & Fragrances">Beauty & Fragrances</option>
  <option value="Fashion">Fashion</option>
  <option value="Home & Kicthen">Home and Kicthen</option>
  <option value="Sports & Outdoor">Sports & Outdoor</option>
  <option value="Toys & Games">Toys & Games</option>
  <option value="Baby Products">Baby Products</option>
  <option value="Grocery">Grocery</option>
  <option value="Automotive">Automotive</option>
  <option value="Tools & Home Improvement">Tools & Home Improvement</option>
  <option value="Books">Books</option>
  <option value="Pet Supplies">Pet Supplies</option>
  <option value="Stationery & Office Supplies">Stationery & Office Supplies</option>
  <option value="Music, Movies & TV Shows">Music, Movies & TV Shows</option>
  <option value="Mahali">Mahali</option>

</select>
</div> */}
 
<div className='adsSection'>
<a href='#'><img style={{marginTop:120,marginBottom:40,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png'></img></a>
<span className='slider01'>
  <Container>
    <Grid container>
<Grid xl={8}>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_hero.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220510/15678653c198e2192174ec7fe227ecfa/en_dk_uae-hero-04.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220428/1747658ec328951b40462b55f6285f18/en_hero.gif" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</Grid>
<span>
  <Grid style={{display:'flex'}} xl={4}>
<img width={150} src='https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-01.png'></img>
<img  width={150} src='https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-03.png'></img>
  </Grid>
</span>
    </Grid>
  </Container>
</span>
</div>
 
<div className='slider02'>
</div>
</Toolbar>

<br></br>


<Toolbar>
<div className='adscardsSection'>
<Container>
  <Grid container>
<Grid xl={3}>
<span>

  <a href='#'>
  <span>
    <img style={{marginLeft:100}}  width={300} height={160} src='https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:150}}   width={300} height={160} src='https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:200}}  width={300} height={160} src='https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:250}} width={300} height={160} src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png'></img>
  </span>
  </a>
</span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 50}} variant='h4'>Recommended for you</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
    <div class="carousel-item">
      
      
    <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Toolbar> 
   


<Toolbar>
  <div style={{background : "#FAF29C",marginTop:50,marginLeft:20,paddingTop:50,paddingBottom:50,marginBottom:70}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png'></img></span>
<Container>
  <Grid container>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-02.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220515/66b60fb64c94e6805de37e047d39550d/en_mb_uae-mega-03-backup.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220514/30321d99e9c64cf46960fc9311ff2b99/en_mb_uae-mega-04.png'></img></span>
</Grid>
  </Grid>
</Container>
  </div>
</Toolbar>
  



<Toolbar>
<div className='adscardsSection'>
<Container>
  <Grid container>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:20}}  width={450} height={160} src='https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:200}}   width={450} height={160} src='https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:380}} width={450} height={160} src='https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png'></img>
  </span>
  </a>
</span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
  <div style={{background : "#F3E008",marginTop:50,marginLeft:20,paddingTop:50,paddingBottom:50,marginBottom:70}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png'></img></span>
<Container>
  <Grid container>
<Grid xl={3}>
<span><img  width={280} src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img  width={280} src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img  width={280} src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img  width={280} src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-04.png'></img></span>
</Grid>
  </Grid>
</Container>
  </div>
</Toolbar>


<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 30, marginBottom : 20 , fontWeight : 'bolder'}} variant='h4'>More clearance deals</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1747.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 3247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 2847.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1626443203/N47090394V_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 347.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1635188660/N43986487A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
    <div class="carousel-item">
      
      
    <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Toolbar> 

<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png'></img></a>
</div>
</Toolbar>

<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 30, marginBottom : 20 , fontWeight : 'bolder'}} variant='h4'>Trending deals in electronics</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1747.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 3247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 2847.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1626443203/N47090394V_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 347.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1635188660/N43986487A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>


    <div class="carousel-item">
    <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Toolbar> 

<Toolbar>
<div style={{marginTop:50,marginBottom:40}} className='adscardsSection'>
<Container>
  <Grid container>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img width={700} height={160} src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-spot-01.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:420}}   width={350} height={160} src='https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png'></img>
  </span>
  </a>
</span>
</Grid>
<Grid xl={3}>
<span>
  <a href='#'>
  <span>
    <img style={{marginLeft:510}} width={350} height={160} src='https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png'></img>
  </span>
  </a>
</span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>

<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-strip-01G.png'></img></a>
</div>
</Toolbar>

<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 30, marginBottom : 20 , fontWeight : 'bolder'}} variant='h4'>Trending deals in laptops</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1747.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645115681/N51448598A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 3247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1650552881/N51035099A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 2847.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637998900/N45795259A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 347.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1650287171/N51238405A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648219210/N41910685A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>


    <div class="carousel-item">
    <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Toolbar> 


<Toolbar>
  <div style={{background : "#E1EFFA",marginTop:50,marginLeft:20,paddingTop:50,paddingBottom:50,marginBottom:10}}>
  <span style={{marginBottom:70}} ><img  src='https://k.nooncdn.com/cms/pages/20220506/aea0b6fb802441648afe8b450184b13f/en_dk-uae-deal-title-01.gif'></img></span>
<Container>
  <Grid container>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-01.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-02.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220514/748bf56982867c107f39b365f76d14ca/en_mb_uae-deals-03.png'></img></span>
</Grid>
<Grid xl={3}>
<span><img width={280} src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-04.png'></img></span>
</Grid>
  </Grid>
</Container>
  </div>
</Toolbar>

<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 30, marginBottom : 20 , fontWeight : 'bolder'}} variant='h4'>Trending deals in mobiles</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570072/N50840187A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1747.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570082/N52929058A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 3247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1642258788/N41247589A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 2847.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645762210/N52751033A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 347.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637065431/N51890458A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1646808689/N52856958A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>


    <div class="carousel-item">
    <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1637596800/N50863797A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:0}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1652029691/N27393383A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</Toolbar> 

<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif'></img></a>
</div>
</Toolbar>

<Toolbar>
  <div style={{background : "#E1EFFA",marginTop:50,paddingTop:50,paddingBottom:50,marginBottom:10}}>
  <span style={{marginBottom:70}} ><img  src='https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_title-noon-01.png'></img></span>
<Container>
  <Grid container>
<Grid xl={2}>
<span><img width={180} src='https://k.nooncdn.com/cms/pages/20220112/4d90a77f391834f5df66e403d031fa6a/en_cat-01.png'></img></span>
</Grid>
<Grid xl={2}>
<span><img width={180} src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-02.png'></img></span>
</Grid>
<Grid xl={2}>
<span><img width={180} src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-03.png'></img></span>
</Grid>
<Grid xl={2}>
<span><img width={180} src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-04.png'></img></span>
</Grid>
<Grid xl={2}>
<span><img width={180} src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-05.png'></img></span>
</Grid>
<Grid xl={2}>
<span><img width={180}src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-06.png'></img></span>
</Grid>
  </Grid>
</Container>
  </div>
</Toolbar>

<Toolbar>
<div className='productsCardsSection'>
<Typography style={{marginTop : 30, marginBottom : 20 , fontWeight : 'bolder'}} variant='h4'>Trending deals in kitchen & dining</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Container>
<Grid container >
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}}  width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1646724232/N20689072A_4.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1747.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 3247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }}  xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 2847.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1650799997/N38900263A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 347.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1647531314/N42677068A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
<Grid sx={{marginRight : 4 }} xl={1.5} sm={1.5} lg={1.5}>
<img style={{marginRight:20}} width={150} src='https://z.nooncdn.com/products/tr:n-t_240/v1645647373/N32034206A_1.jpg'></img>
<Typography>Apple iPad mini 2021 <br></br> 8.3 Inches 64gb<br></br>
<br></br>AED 1247.00 <br></br><del style={{fontSize : 10}}>AED 1399</del> <span style={{color : "green",fontSize : 10}}>10% OFF</span><br></br><br></br>Arrives<br></br>Tomorrow ,17 May<br></br><span style={{backgroundColor : "yellow",fontSize : 13}}>express</span>          <span style={{color : "orange",fontSize : 13}}><StarRoundedIcon></StarRoundedIcon>4.9</span> (54)</Typography>
</Grid>
</Grid>
</Container>
</div>
</div>
</div>
</div>
</Toolbar>


<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220513/566de6256fc734f249b05d5ec115504f/en_dk_uae-hero-03.png'></img></a>
</div>
</Toolbar>

<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-strip-011.gif'></img></a>
</div>
</Toolbar>

<Toolbar>
  <div style={{background : "#FFF3DD",marginTop:50,paddingTop:50,paddingBottom:50,marginBottom:10}}>
  <span style={{marginBottom:80}} ><img  src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-mw-title.png'></img></span>
<Container>
  <Grid container>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-01.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-02.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-03.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-04.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-05.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-06.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-mw-01.png'></img></span>
</Grid>
<Grid style={{marginBottom:70}} xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-08.png'></img></span>
</Grid>
  </Grid>
</Container>


<span style={{marginBottom:80}} ><img  src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-ww-title.png'></img></span>
<Container>
  <Grid container>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-01.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-02.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-03.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-04.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130} src='https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-ww-01.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-06.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-07.png'></img></span>
</Grid>
<Grid style={{marginBottom:70}} xl={1.5}>
<span><img width={130}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-08.png'></img></span>
</Grid>
  </Grid>
</Container>
<img src='https://k.nooncdn.com/cms/pages/20220513/566de6256fc734f249b05d5ec115504f/en_dk_uae-hero-03.png'></img>
  </div>
</Toolbar>

<Toolbar>
<div style={{background : "#FFFFFF",marginTop:50,paddingTop:50}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-07.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={150}src=''></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:50,paddingTop:50}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-07.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={150}src=''></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:50,paddingTop:50}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-laptops-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-07.png'></img></span>
</Grid>
<Grid xl={1.5}>
<span><img width={150}src=''></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>

<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20211018/ecde4ae8250d6cd07b29d4de4b106f61/en_strip-00.png'></img></a>
</div>
</Toolbar>











<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-kitchen-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-07.png'></img></span>
</Grid>

  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>

<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/12c64234eb40d3716a7ac909a89df125/en_dk_uae-noon-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-watches-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-health-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>


<Toolbar>
<div style={{background : "#FFFFFF",marginTop:10,paddingTop:20}}>
  <span><img  src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-title.png'></img></span>
<Container sx={{marginTop:5}}>
  <Grid container>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-01.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-02.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-04.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-03.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150} src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-05.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-06.png'></img></span>
</Grid>
<Grid xl={1.7}>
<span><img width={150}src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-07.png'></img></span>
</Grid>
  </Grid>
</Container>
</div>
</Toolbar>



<Toolbar>
<div className='adsSection'>
<a href='#'><img style={{marginTop:50,marginBottom:50,display: "block"}}  src='https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg'></img></a>
</div>
</Toolbar>
    </div>
  );
}

export default App;
