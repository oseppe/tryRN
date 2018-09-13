## Labels Management
All labels shown to the user should be constants coming from a label data source (by default, a JSON file inside **Localisation/strings** folder). Use **getText** and **getTexts** from **Localisation/textHelper.js** to retrieve needed labels for a screen. These two methods follow a hierarchy. Given a labelKey, both methods first looks in the labels data source but if not found there, looks in the **defaultLabels**. If still not found in the **defaultLabels**, the methods return an empty string. Because of this behaviour, make sure that new labels are added to the **defaultLabels** file.  

### Retrieving labels
  
#### getText(labelKey: string)
Import from **textHelper.js**. Returns text associated with the passed key. If none are found, returns an empty string.

#### getTexts(labelKeys: Array[strings])
Import from **textHelper.js**. Returns an object of the format { labelKey: associatedText }. Similar to **getText()**, associatedText will be an empty string when a labelKey in labelKeys has no associated text. 

### Adding a label
1. Make sure the key-value pair for the label exists in the labels data source
2. Add the label's key inside **labelKeys.js**
3. Add the label's key and value in **defaultLabels.js**

### Changing labels data source
1. Locate **textHelper** file.
2. Find **getLabelsSource()**
3. Replace **getFromJSON(locale)** with a function that retrieves an object with format { labelKey: labelText }. Make sure that the replacement function accepts a string parameter for locale.  