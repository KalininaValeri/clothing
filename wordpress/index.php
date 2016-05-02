<?php get_header(); ?>

<section class="renge clearfix">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 col-sm-8 col-xs-12 renge_content">

<?php if(have_posts()): ?>
    <?php while(have_posts()) : the_post(); ?>
                <div class="col-md-4 col-sm-6 col-xs-12 item">
                    <h4 class="item_name"><?php the_title(); ?></h4>
                    <div class="table">
                        <div class="table_cell">
                            <?php
                            if ( function_exists( 'add_theme_support' ) )
                                the_post_thumbnail( array(250,9999) );
                            ?>
                        </div>
                    </div>
                    <div class="item_firma"><?php the_content(); ?></div>
                </div>
    <?php endwhile; /* rewind or continue if all posts have been fetched */ ?>
    <div class="pagenavi"><?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?></div><!--end pagination-->
<?php else : ?>
<?php endif; ?>
            </div>


            <!--sidebar-->
<?php get_sidebar(); ?>
            
        </div>
    </div>


</section>

<?php get_footer(); ?>