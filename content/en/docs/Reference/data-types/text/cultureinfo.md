---
title: "CultureInfo"
linkTitle: "CultureInfo"
description: "Used to represent information about a specific culture, including the names for the culture, the writing system, the calendar used, the sort order of strings, and formatting for dates and numbers."
---

# {{% param title %}}

<p class="namespace">(System.Globalization.CultureInfo)</p>

<img src="/images/work-in-progress.jpg">

## Summary

## Remarks

### Create a CultureInfo

### Convert CultureInfo to Text

### Property Editor Support

### Known Limitations

## See Also

### Related Data Types

### Related Concepts

### External Documentation

TODO:

* If the culture identifier is empty e.g (new CultureInfo("")), cultureInfo is set to InvariantCulture.
* If the culture does not exist, the operating system will create a custom culture using the culture identifier.
* As well as the default InvariantCulture you can also use the culture of the system (CultureInfo.CurrentCulture) or provide a new culture info (new CultureInfo("en-GB")).
* Note about formatProvider and CultureInfo: If an invalid CultureInfo is provided (e.g. new CultureInfo("enaa")), a CultureNotFoundException will be thrown.
* Talk about CultureInfo.InvariantCulture
* Talk about CultureInfo.CurrentCulture
