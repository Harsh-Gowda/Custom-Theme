<?php 

// Template Name: Home

get_header();

?>

<div class="home-hero w-full h-screen relative">
      <?php 
if ( have_posts() ) : 
    while ( have_posts() ) : the_post(); ?>
        <div class="home-hero w-full h-screen relative">
            <?php the_post_thumbnail('full'); ?>
        </div>
    <?php endwhile; 
endif; 
?>
</div>

<div class="home-category grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
    <div class="category-intro">
        <h1 class="text-4xl font-bold mb-4">Discover Our Collections</h1>
        <p class="text-lg">Explore our wide range of designer fans and lighting products, crafted to elevate your living spaces.</p>

    </div>
    <div class="category-grid flex flex-col gap-8 ">
       
            <div class="category-grid flex flex-row gap-8">
                <div class="category-item">
                    <h2>Designer Fans</h2>
                    <p>Explore our exclusive collection of designer fans that blend style and functionality.</p>
                </div>
                <div class="category-item">
                    <h2>Table Fans</h2>
                    <p>Discover our range of powerful and efficient table fans for your home or office.</p>
                </div>
            </div>
    
            <div class="category-item">
                <h2>Ceiling Fans</h2>
                <p>Enhance your space with our elegant ceiling fan collection, designed for both style and performance.</p>
           </div>
    </div>
    
   </div>
</div>





<?php get_footer(); ?>