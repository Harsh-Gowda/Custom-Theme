<?php 
// Template Name: Find Showroom

get_header(); ?>


<main class="find-showroom-page">
    <section class="showroom-hero">
        <h1>Find a Showroom</h1>
        <p>Visit our stores across India</p>
    </section>

    <section class="showroom-content">
        <div class="container">
            <h2>Our Showrooms</h2>
            <p>Explore our designer fans and lighting collections in person.</p>

            <?php echo do_shortcode('[custom_quote]'); ?>

            <h2>Store Locations</h2>
            <ul>
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>Bangalore</li>
                <li>Chennai</li>
                <li>Kolkata</li>
            </ul>
        </div>
    </section>

<?php get_footer(); ?>