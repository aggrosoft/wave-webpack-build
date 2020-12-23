<?php

include(getShopBasePath().'/Application/views/wave/theme.php');

/**
 * Theme Information
 */
$aTheme = array_replace_recursive(
    $aTheme,
    [
        'id'          => 'next',
        'title'       => 'Webpack Example',
        'description' => 'Webpack example theme',
        'thumbnail'   => 'theme.jpg',
        'version'     => '1.0.0',
        'author'      => '<a href="http://www.aggrosoft.de" title="Aggrosoft GmbH">Aggrosoft GmbH</a>',
        'parentTheme'    => 'wave',
        'parentVersions' => array('1.5.0')
    ]
);
