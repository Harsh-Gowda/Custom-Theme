<!DOCTYPE html>
<html>
<head>
    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css"> -->

    <?php wp_head(); ?>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="main-menu p-4 bg-[#faf9f2]">
        <div class="head-logo ">
            <?php the_custom_logo(); ?>
        </div>
        
        <div class="menu-items">
            <?php  wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'nav-menu'
                )); 
            ?>
        </div>

        <div class="cl-btn">
            <button class="cart-button">Cart</button>
        </div>
    </nav>
</body>
</html>