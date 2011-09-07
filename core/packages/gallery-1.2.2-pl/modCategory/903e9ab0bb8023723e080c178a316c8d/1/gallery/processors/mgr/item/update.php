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
 * Delete an item entirely
 *
 * @package gallery
 */

/* get item */
if (empty($scriptProperties['id'])) return $modx->error->failure($modx->lexicon('gallery.item_err_ns'));
$item = $modx->getObject('galItem',$scriptProperties['id']);
if (empty($item)) return $modx->error->failure($modx->lexicon('gallery.item_err_nf'));

$scriptProperties['active'] = !empty($scriptProperties['active']) ? 1 : 0;
$item->fromArray($scriptProperties);

/* remove item */
if (!$item->save()) {
    return $modx->error->failure($modx->lexicon('gallery.item_err_save'));
}

if (isset($scriptProperties['tags'])) {
    $tagNames = explode(',',$scriptProperties['tags']);

    $oldTags = $item->getMany('Tags');
    foreach ($oldTags as $oldTag) $oldTag->remove();

    foreach ($tagNames as $tagName) {
        $tagName = trim($tagName);
        if (empty($tagName)) continue;

        $tag = $modx->newObject('galTag');
        $tag->set('item',$item->get('id'));
        $tag->set('tag',$tagName);
        $tag->save();
    }
}

/* output to browser */
return $modx->error->success('',$item);