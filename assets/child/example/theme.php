<?php

include('../wave/theme.php');

/**
 * Theme Information
 */
$aTheme = array_merge(
    $aTheme,
    [
        'id'          => 'example',
        'title'       => 'Webpack Example',
        'description' => 'Webpack example theme',
        'thumbnail'   => 'theme.jpg',
        'version'     => '1.0.0',
        'author'      => '<a href="http://www.aggrosoft.de" title="Aggrosoft GmbH">Aggrosoft GmbH</a>',
        'parentTheme'    => 'wave',
        'parentVersions' => array('1.5.0')
    ]
);
