 <?php
function test_css() {
    wp_enqueue_style('test', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'test_css');


function theme_setup() {
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array('primary'=> 'Primary-Menu',
    'footer' => 'Footer-Menu'));
}
add_action('after_setup_theme','theme_setup'); 

add_filter('show_admin_bar','__return_false'); // to hide admin bar on frontend unnessary links for clients


    // function child_theme_setup(){  // to load parent and child theme stylesheets

    //     wp_enque_style('parent-style', get_template_directory_uri(). '/style.css');
    //     wp_enque_style('child-style',get_stylesheet_uri(), array('parent-style','1.0'));
    // }
    // add_action('wp_enque_scripts','child_theme_setup');


?>

