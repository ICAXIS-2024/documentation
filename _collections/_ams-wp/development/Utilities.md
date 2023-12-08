---
title: Utilities
pagenum: 3
---

## AMS_POSTAX
### Introduction
__Custom Post Types, Tags and Taxonomies__
`AMS_POSTAX` is a PHP class designed for managing custom post types, tags, and taxonomies in WordPress. It simplifies the process of creating, updating, deleting, and handling custom post types, tags and taxonomies with an emphasis on ease of use.

### Class Properties

The `AMS_POSTAX` class in WordPress is designed for managing custom post types and taxonomies. Below is a detailed explanation of its properties and their functionalities.

#### Schema and Data Management
- **`$schemas`**: Holds schemas for post types, post statuses, tags, and taxonomies, defining their structure and constraints.
- **`$sample_data`**: Contains sample data for setup and testing of post types, post statuses, tags, and taxonomies.
- **`$lists`**: Maintains lists of registered post types, post statuses, tags, and taxonomies for an overview.
- **`$is_rest`**: Boolean flag indicating if the current request is via the REST API, influencing request handling.

#### Post Type and Taxonomy Configuration
- **`$post_type_name`**: Stores the name of the custom post type as a unique identifier.
- **`$singular`**: Human-friendly singular name of the post type for display purposes.
- **`$plural`**: Human-friendly plural name of the post type for plural contexts in UI.
- **`$slug`**: URL-friendly slug for the post type, crucial for permalinks and URLs.
- **`$options`**: Array of user-submitted options for customizing the post type.
- **`$taxonomies`**: Array of taxonomies associated with the post type for categorization.
- **`$taxonomy_settings`**: Settings for each registered taxonomy, detailing their configuration.
- **`$post_status`**: Information about different post statuses linked to the custom post type.
- **`$post_status_settings`**: Settings for the post statuses, enhancing control over their behavior.
- **`$existing_taxonomies`**: Existing taxonomies to be registered post post type setup.

#### Admin Interface Customization
- **`$filters`**: Defines taxonomy filters for the admin edit screen, aiding in content management.
- **`$columns`**: Determines columns to be displayed in the admin edit screen for a customized view.
- **`$custom_populate_columns`**: Functions to populate admin columns with custom content.
- **`$sortable`**: Identifies sortable columns in the admin edit screen for better organization.

#### Localization and Registration Arguments
- **`$textdomain`**: Sets the text domain for translation, defaulting to "postax" or "ams-domain".
- **`$args`**: Arguments for registering post types, post statuses, taxonomies, and tags, offering configurability.

---

Each property plays a crucial role in the flexibility and functionality of the `AMS_POSTAX` class, making it a powerful tool for WordPress development.

### Class Methods

#### Constructor and Core Methods

##### `__construct()`
- **Purpose**: Initializes the class, defines the schema, registers taxonomies, post types, and REST API endpoints.
- **Parameters**: None.
- **Return Values**: None.

##### `_preset()`
- **Purpose**: Sets initial configurations such as directories, schemas, and data.
- **Parameters**: None.
- **Return Values**: None.

#### Post Type and Taxonomy Registration

##### `built_in_post_types()`
- **Purpose**: Registers built-in post types.
- **Parameters**: None.
- **Return Values**: None.

##### `built_in_taxonomies()`
- **Purpose**: Registers built-in taxonomies.
- **Parameters**: None.
- **Return Values**: None.

##### `register_post_type()`
- **Purpose**: Registers custom post types.
- **Parameters**: None.
- **Return Values**: None.

##### `register_taxonomy()`
- **Purpose**: Registers custom taxonomies.
- **Parameters**: `$taxonomy_names`, `$options`.
- **Return Values**: None.

##### `register_post_status()`
- **Purpose**: Registers custom post statuses.
- **Parameters**: `$status_names`, `$options`.
- **Return Values**: None.

#### Admin Interface Customization

##### `add_admin_columns()`
- **Purpose**: Adds custom columns to the admin edit screen.
- **Parameters**: `$columns`.
- **Return Values**: Modified array of columns.

##### `populate_admin_columns()`
- **Purpose**: Populates custom columns in the admin edit screen.
- **Parameters**: `$column`, `$post_id`.
- **Return Values**: None.

##### `add_taxonomy_filters()`
- **Purpose**: Adds taxonomy filters to the admin edit screen.
- **Parameters**: None.
- **Return Values**: None.

#### REST API Endpoints

##### `route_endpoints()`
- **Purpose**: Registers REST API endpoints for CRUD operations on post types and taxonomies.
- **Parameters**: None.
- **Return Values**: None.

##### `create_post_type()`, `update_post_type()`, `delete_post_type()`
- **Purpose**: Handles creation, updating, and deletion of post types via REST API.
- **Parameters**: `WP_REST_Request $request`.
- **Return Values**: `WP_REST_Response`.

##### `create_taxonomy()`, `update_taxonomy()`, `delete_taxonomy()`
- **Purpose**: Manages creation, updating, and deletion of taxonomies via REST API.
- **Parameters**: `WP_REST_Request $request`.
- **Return Values**: `WP_REST_Response`.

#### Data Management and Utility Methods

### `save_post_type()`, `save_taxonomy()`
- **Purpose**: Saves post type and taxonomy data to JSON files and/or database.
- **Parameters**: Data arrays.
- **Return Values**: None or boolean.

##### `verify_arrays_are_similar()`
- **Purpose**: Compares two arrays to verify similarity.
- **Parameters**: `$array1`, `$array2`.
- **Return Values**: Boolean.

##### `load_post_type()`, `load_taxonomy()`
- **Purpose**: Loads post type and taxonomy data from JSON files and/or database.
- **Parameters**: None.
- **Return Values**: None.

##### `update_lists()`
- **Purpose**: Updates lists of post types and taxonomies.
- **Parameters**: `$force` (optional).
- **Return Values**: None.

##### `get_data()`
- **Purpose**: Retrieves data from JSON files.
- **Parameters**: `$name`.
- **Return Values**: Data array

#### Constructor, Private and Public
Private methods are used internally to support various functionalities like saving and loading post types, managing taxonomies, and utility functions.

For each method, provide the following details:
•	Purpose: What the method does.
•	Parameters: List and describe parameters, if any.
•	Return Values: Describe what values are returned, if any.
•	Examples: Provide code snippets on how to use the method.
•	Additional Notes: Any important notes or warnings.
•	init()
•	initialize()
•	post_types()
•	taxonomies()
•	route_endpoints()
•	permissions_check()
•	lists()
•	create_post_type()
•	update_post_type()
•	delete_post_type()
•	create_taxonomy()
•	update_taxonomy()
•	delete_taxonomy()
•	save_post_type()
•	save_taxonomy()
•	verify_arrays_are_similar()
•	load_post_type()
•	load_taxonomy()
•	update_lists()
•	get_data()
•	parse_schema()
AND MORE....

### API Route and Endpoints

### Data Management

### Hooks and Filters

### Error Handling

### Validation

### Best Practices

### Usage
To use this class:

1. Include the `AMS_POSTAX` class in your WordPress theme or plugin.
2. Instantiate the class.
3. Use the public methods to create, update, or delete custom post types and taxonomies.

### Example
```php
$ams_postax = new AMS_POSTAX();
$ams_postax->create_post_type([...]);
```

### Notes
Notes