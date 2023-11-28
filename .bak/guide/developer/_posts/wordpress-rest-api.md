---
title: No REST API
author: MeOw
date: 2023-04-27
category: Wordpress
layout: post
---

WordPress REST API - bd_type Taxonomy Endpoints

1. List Types
    Retrieve a list of all types or fetch a specific type using an ID or slug.

    Endpoint:
    URL: config/types/[skey]
    Method: GET
    Parameters:
    skey (Optional): An ID or slug of the type.
    Example Requests:
    List all types: config/types
    Fetch type with ID 12: config/types/12
    Fetch type with slug "example-slug": config/types/example-slug
    Parameters:
    limit (optional): 10

2. Create Type
    Create a new type in the bd_type taxonomy.

    Endpoint:
    URL: config/types
    Method: POST
    Parameters:
    name (Required): Name of the type.
    slug (Optional): Slug for the type.
    description (Optional): Description for the type.
    parent (Optional): ID or slug of the parent type.
    meta (Optional): Array of meta fields for the type.
    Example Request:


    POST config/types
    {
        "name": "New Type",
        "slug": "new-type",
        "description": "This is a new type",
        "parent": "parent-slug",
        "meta": {
            "custom_field_1": "value1",
            "custom_field_2": "value2"
        }
    }
3. Update Type
    Update an existing type using its ID or slug.

    Endpoint:
    URL: config/types/[skey]
    Method: POST
    Parameters:
    skey (Required): ID or slug of the type to be updated.
    name (Optional): New name for the type.
    slug (Optional): New slug for the type.
    description (Optional): New description for the type.
    parent (Optional): ID or slug of the new parent type.
    meta (Optional): Array of updated meta fields for the type.

    Example Request:
    POST config/types/12
    {
        "name": "Updated Name",
        "description": "Updated description.",
        "meta": {
            "custom_field_1": "new_value1"
        }
    }
4. Delete Type
    Delete a type from the bd_type taxonomy.

    Endpoint:
    URL: config/types/[id]
    Method: DELETE
    Parameters:
    id (Required): ID of the type to be deleted.
    Example Request:


    DELETE config/types/12