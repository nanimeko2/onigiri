
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} effect
*List effect:*
2colors-canvas
3d-wall
100_dollars
abstract-rays
airbrush
angry_granny
apples
applying_makeup
aqua
art-admirer
art-experts
artist
artistic-filter
artist_in_the_dark
art_exhibition
art_gallery
art_painting
aruga
at-the-beach
at-the-gallery
aurora
auto-enhance
autumn-frame
ax
bad_santa
bathe
beauty-boost
behind_the_fence
bicycle
biker
billboard
billboard_workers
black-and-white-mural
black-mamba
black-pen
black-pencils
blueprint
boardings
bodybuilder
brass-frame
bricks
bride
bride_in_grass
broadway
brugge
brush-strokes
bubbles
building_painters
bunnies
bunny_ears
burned-bread
burning-fire
cafe
canvas
cappuccino
captivity
card-with-flowers
cartoon
cartoonizer
castle
champagne
che-guevara
chinese_opera
christmass_tree_balls
chris_pirillo
cinema
circle-of-colors
city-billboard
city
citylight
clasiketch
classic-art
coal-sketch
coffee_break
color-checkers
colored-pencils
colored-pens
colored-sketch
colored-squares
colored-texture
colorful-tiles
colorful-wood
coloring-book
coloured-pencils
comic-book
comics!-boom
concrete-jungle
cotton-candy
crayola
crooked_gambler
crown
cupid
cutout
death_proof
deep-blue
dj
dollar
doodle-sketch
dots
draft
drawing-photo
drawing
drawing_near_the_sea
dreamy-sky
drizzle
drops
easter-flowers
easter-frame
easter
equestrienne
esquire
ethanol
etude
evening-billboard
explorer-drawing
eye
family_in_museum
famous-gallery
female_gambler
female_soldier
film-strip
film_scan
fire
fireplace
flood
flower_frame
football-field
frame
frame_and_roses
frankenstein-monster
frosty_window
galatea
galaxy
galeries_lafayette
gallery-visitor
gas_mask_freaks
gentle-painting
ghostwood
giant-artwork
girl-with-bicycle
girls_with_poster
glamour
glass
glossy-cartoon
glowing-circles
goalkeeper
goats
godfather
golden-brown
golden_valentine
good_luck_chuck
graffiti
graffiti_artist
graffiti_billboard
graffiti_wall
greenwich
halloween-pumpkins
halo
hammock
harley-davidson
heart_locket
hockey
hockey_team
huge_billboard
icecream
impressionists
in-the-cinema
in-the-woods
indian_beauty
ink-pen
ink-portrait
ink-wash
jigsaw_puzzle
juice
kitty-and-frame
kitty
knight-with-sword
knight
lake
large_painting
last_advert
late_autumn
latte-art
lavander
leftfield
lego
lego_portrait
lemon-tree
lenin
library
local_shop
london_calling
louvre
love-letter
mac-solarize
madonna
magazine-comics
magic-stars
magnetic-sketchpad
male_gambler
marilyn_autograph
marilyn_monroe
master-sketch
medieval_art
melbourne-gallery
memories
mermaid
metalic-grain
midnight_billboard
mini_cooper
mint_frame
mirror
modern_art_exhibition
moist
mona_lisa
mosaic-sketch
mount_rushmore
museum
museum_kid
mysterious_painting
napkine
national-gallery-in-london
negative-smoke
new-year-frames
new-york-street
newspaper
new_york
night
night_city
night_ride
night_street
night_walk
nostalgic-frame
notebook
nyc
ny_taxis
obama
ocean
odessa_opera_house
oil_painting
old-camera
old-dream
old-letter
old-photo
old-screen
old_book
on_the_moon
on_the_mountain
ophelia
orion
ornament
osaka
oxford
paint-brush
painter_at_work
painting-and-sketches
paints-crafts
paintwash
parchment
paris_hilton
passage
passing-by-the-painting
pastel
pavement_art
pavement_artist
pavement_drawing
pedestrian-crossing
peeling
pencil-sketch
pencils-canvas
perfume_shop
picadilly_circus
piccadilly-arcade
pictures_sale
picture_at_the_gallery
pilot
pink-panther
pinkify
pisa_street
playful-cat
polaroid_dress
portrait
portrait_on_the_wall
posterize
posters
press-comics
press_conference
prince_of_wales_theatre
pumpkins
puppy-with-frame
purple-haze
purple_sky
putin
puzzle
rainbow
rainwater
rainy-night
rainy_day
reconstruction
red-and-blue
red-lights
red-wine
reflection
replacing_billboard_advert
reproduction
retail_park
retro-black
retro-comic
rinse
riverside_billboard
romantic_etude
roses-and-marshmallows
roses
scratched-photo
scribble
scroll
sharp-paint
shine-stripes
shiny-color
shooting-stars
shopping-arcade
shopping_center
shop_poster
sidewalk
singer
sip
sketch-practicing
skydiver
snowboard
snow_in_london
soak
soda
solarization
soppy
sparklers
sparkles
sparkling-snow
special_billboard
sphinx
spray
spring-flowers
spring_memories
stacco
stadium
stardust
stars
static-noise
stencil
stone-age
street_artist
street_exhibition
striped-jeans
summer-dust
summoning-spirits
sunburst
sunray
superman
supernova
surfer
swedish_billboard
tablet
taipei
the-frame
the_first_man_on_the_moon
the_gun
the_kiss
tintbrush
tokyo-crossing
toonic
torn_billboard
traffic-lights
train-station-poster
train_station
tram
travellers-sketch
triangular
truck-advert
truck
tub
tulips
tv_girl
twilight
two_cats
two_female_fans
ultra-paint
underground-poster
urban
urban_billboard
vhs
vibration
victoria_beckham
video-game
vintage-photos
vintage-scooter
vintage_frame
vintage_table
vitrage-window
vogue
wall-mural
wall-painting
wall-poster
wall
wall_banner
wall_painting
wanted_wizard
warhol-dots
warhol
warrior
watchinng
watercolor
watercolour-painting
watercolours
waterway
waves
wayback
weave
wedding-day
wet
wild-brush
wine-label
winter-princess
witch
woman_pilot
wood
worker-by-the-billboard
woven-sketch
xmas_tree
yellow_wall
yo`)
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let images = `https://violetics.pw/api/photomaker/${encodeURIComponent(text)}?apikey=beta&image=${encodeURIComponent(url)}`
    let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${url}`
  await conn.sendFile(m.chat, images, '', caption, m)
            }
//lo mau apa??
handler.help = ['phmaker'].map(v => v + ' <caption|reply>')
handler.tags = ['maker']
handler.command = /^(phmaker)$/i

export default handler
