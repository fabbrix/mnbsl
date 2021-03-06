<?php
/**
 * Gallery
 *
 * Copyright 2010-2011 by Shaun McCormick <shaun@modx.com>
 *
 * Gallery is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * Gallery is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Gallery; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @package gallery
 */
/**
 * @var modX $modx
 * 
 * @package gallery
 * @subpackage processors
 */
/** @var galAlbum $album */
if (empty($scriptProperties['id'])) return $modx->error->failure($modx->lexicon('gallery.album_err_ns'));
$album = $modx->getObject('galAlbum',$scriptProperties['id']);
if (!$album) return $modx->error->failure($modx->lexicon('gallery.album_err_nf'));

$scriptProperties['active'] = !empty($scriptProperties['active']) ? 1 : 0;
$scriptProperties['prominent'] = !empty($scriptProperties['prominent']) ? 1 : 0;
$album->fromArray($scriptProperties);

if ($album->save() == false) {
    return $modx->error->failure($modx->lexicon('gallery.album_err_save'));
}

/* output */
$albumArray = $album->toArray('',true);
return $modx->error->success('',$albumArray);