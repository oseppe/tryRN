## Labels Management
All labels shown to the user should be constants coming from a label data source (by default, a JSON file inside **Localisation/strings** folder). Use **getText** and **getTexts** from **Localisation/textHelper.js** to retrieve needed labels for a screen. Given a labelKey, both methods first looks in the labels data source but if not found there, gets the default label from the labelKey itself. Because of this behaviour, make sure that **label keys follow the label key naming convention**.

### Retrieving labels
  
#### getText(labelKey: string)
Import from **textHelper.js**. Returns text associated with the passed key.

#### getTexts(labelKeys: Array[strings])
Import from **textHelper.js**. Returns an object of the format { labelKey: associatedText }.

### Adding a label
1. Make sure the key-value pair for the label exists in the labels data source
2. Add the label's key inside **labelKeys.js**
3. Make sure the label key naming convention is followed so that a default key can be derived.

### Label Key Naming Convention
The label key consists of two parts: **UI description** where the label will be used and the **Default Label**. Make sure to follow the guidelines below so that a default label will be returned when the label key does not exist in the labels data source. **getText()** and **getTexts** will merely return the passed key when the passed key is not in the labels data source and the naming convention is not followed.

1. **UI Description** and **Default Label** should be separated by an underline   
Examples:  
*btnWelcome_Login*  **becomes** *Login*  
*titleDetails_Details* **becomes** *Details*   

2. If **Default Label** is more than 1 word, separate the words using dashes  
Examples:  
*titleRegister_Register-Account* **becomes** *Register Account*  
*titleDetails_User-Details* **becomes** *User Details*  

### Changing labels data source
1. Locate **textHelper** file.
2. Find **getLabelsSource()**
3. Replace **getFromJSON(locale)** with a function that returns an object with format { labelKey: labelText }. Make sure that the replacement function accepts a string parameter for locale.  