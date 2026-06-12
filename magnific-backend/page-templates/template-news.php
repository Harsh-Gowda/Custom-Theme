<?php
/* Template Name: News (Under Construction) */

// This forces WordPress to use the 404 template instead of this one
global $wp_query;
$wp_query->set_404();
status_header( 404 );
get_template_part( 404 ); 
exit;
?>