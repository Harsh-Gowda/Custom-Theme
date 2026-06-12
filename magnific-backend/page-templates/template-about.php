<?php
/*
Template Name: About Us
*/
get_header(); 
?>

<main class="about-page">
    <section class="about-hero">
        <h1>About Magnific</h1>
        <p>Premium lighting since 2010</p>
    </section>

    <section class="about-content">
        <div class="container">
            <h2>Our Story</h2>
            <p>We craft luxury lighting and designer fans for elite homes across India.</p>

            <?php echo do_shortcode('[custom_quote]'); ?>

            <h2>Why Choose Us</h2>
            <ul>
                <li>250+ Designer Fans</li>
                <li>1000+ Lighting Products</li>
                <li>Pan India Stores</li>
            </ul>
        </div>
    </section>
</main>

<?php get_footer(); ?>