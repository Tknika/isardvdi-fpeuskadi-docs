<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @package customfield_file
 * @author Andrew Hancox <andrewdchancox@googlemail.com>
 * @author Open Source Learning <enquiries@opensourcelearning.co.uk>
 * @link https://opensourcelearning.co.uk
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @copyright 2021, Andrew Hancox
 */

use core_customfield\data;
use core_customfield\data_controller;
use core_customfield\field_controller;

defined('MOODLE_INTERNAL') || die;

/**
 * Serve the files from the customfield_file file areas
 *
 * @param stdClass $course the course object
 * @param stdClass $cm the course module object
 * @param context $context the context
 * @param string $filearea the name of the file area
 * @param array $args extra arguments (itemid, path)
 * @param bool $forcedownload whether or not force download
 * @param array $options additional options affecting the file serving
 * @return bool false if the file not found, just send the file otherwise and do not return
 */
function customfield_file_pluginfile($course, $cm, $context, $filearea, $args, $forcedownload, array $options = array()) {
    global $DB;

    $itemid = array_shift($args);
    if ($filearea === 'value') {
        // Value of the data, itemid = id in data table.
        $datarecord = $DB->get_record(data::TABLE, ['id' => $itemid], '*', MUST_EXIST);
        $field = field_controller::create($datarecord->fieldid);
        $data = data_controller::create(0, $datarecord, $field);
        $handler = $field->get_handler();
        //MUA if ($field->get('type') !== 'file' || !$handler->can_view($field, $data->get('instanceid'))
        //MUA     || $data->get_context()->id != $context->id) {
        //MUA     send_file_not_found();
        //MUA }
    } else {
        send_file_not_found();
    }

    $filename = array_pop($args); // The last item in the $args array.
    $filepath = '/' . ($args ? implode('/', $args) . '/' : '');

    // Retrieve the file from the Files API.
    $fs = get_file_storage();
    $file = $fs->get_file($context->id, 'customfield_file', $filearea, $itemid, $filepath, $filename);
    if (!$file) {
        send_file_not_found();
    }

    // We can now send the file back to the browser - in this case with a cache lifetime of 1 day and no filtering.
    send_file($file, 86400, 0, $forcedownload, $options);
}