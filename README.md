#Component Layout
<a target="_blank" href="https://github.com/adventureBuilder/adventureBuilder/blob/master/assets/Adventure-Display.pdf">Click here to open the componenets layout in a new tab</a>

#DataBase Schema
<a target="_blank" href="https://github.com/adventureBuilder/adventureBuilder/blob/master/assets/adventureDB.pdf">Click here to open the database schema in a new tab</a>

#Endpoints

<b><u>USER ENDPOINTS</u></b>
Get `/api/getUser` 
<br/>
    Returns user data that is on sessions
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/getUser`
      {
        "user_id": 1,
        "username": "harrison ford",
        "email": "adventureBuilder2049@gmail.com",
        "name": "adventure",
        "profile_picture": "http://www.placekitten.com/200/250"
      }
      ```
    </details>
Put `api/updateUser`
<br/>
 in body={username} on req.user={userId} (req.session.user for testing)
 <br/>
    Updates the username of the user in the users table
    <details>
      <summary>Example Output</summary>
      ```
      body
      {
        "username" : "harrison"
      }
      response
      {
        "user_id": 1,
        "user_name": "harrison",
        "email": "adventureBuilder2049@gmail.com",
        "name": "adventurer",
        "profile_picture": "http://placekitten.com/234/250",
        "auth_id": "asdtfasdgsfdgsdfgsdf"
      }
      ```
    </details>

<b><u>CHARACTER ENDPOINTS</u></b>
post `/api/character` 
<br/>
    on body ={characterName, gender, dexterity, strength, charisma, health_points, classId} on req.user={userID}(req.session.user for testing)
    <br/>
    Adds a new character to the character table
    <details>
      <summary>Example Output</summary>
      ```
      Post `/api/character`
      Body
      {
        "characterName": "Ryan Gosling",
        "gender": "male",
        "dexterity": 5, 
        "strength": 1,
        "charisma": 3, 
        "healthPoints": 5,
        "classId": 1
      }
      Response
      {
        "character_id": 4,
        "character_name": "Ryan Gosling",
        "gender": "male",
        "dexterity": 5,
        "strength": 1,
        "charisma": 3,
        "health_points": 5,
        "alive": 1,
        "class_id": 1,
        "user_id": 1
      }
      ```
    </details>
Get `/api/getAllCharacters/:userId`
<br/>
    Returns all the characters for a user.
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/getAllCharacters/1`
      [
        {
          "character_id": 1,
          "character_name": "HarrisonFord",
          "gender": "female",
          "dexterity": 1,
          "strength": 2,
          "charisma": 6,
          "health_points": 19,
          "alive": 1,
          "class_id": 1,
          "user_id": 1,
          "class_name": "test",
          "base_dexterity": 0,
          "base_strength": 0,
          "base_charisma": 5,
          "male_class_img": "http://placekitten.com/234/232",
          "female_class_img": "http://placekitten.com/234/232",
          "start_health_points": 18
        }
      ]
      ```
    </details>
Get `/api/getSelectedCharacter/:characterId`
<br/>
    Returns the data for a selected character
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/getSelectedCharacter/1`
      {
        "character_id": 1,
        "character_name": "HarrisonFord",
        "gender": "female",
        "dexterity": 1,
        "strength": 2,
        "charisma": 6,
        "health_points": 19,
        "alive": 1,
        "class_id": 1,
        "user_id": 1,
        "class_name": "test",
        "base_dexterity": 0,
        "base_strength": 0,
        "base_charisma": 5,
        "male_class_img": "http://placekitten.com/234/232",
        "female_class_img": "http://placekitten.com/234/232",
        "start_health_points": 18
      }
      ```
    </details>

<b><u>ENCOUNTER ENDPOINTS</u></b>
Get `/api/getEncounters/:encounterId`
<br/>
    Returns the data for a selected encounter along with an array of options
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/getEncounters/1`
      {
        "encounter_id": 1,
        "encounter_name": "Giant Cat attack",
        "encounter_description": "you are attacked by a giant cat with fangs",
        "final_encounter": 0,
        "story_id": 1,
        "encounter_background_images_id": 1,
        "image_name": "Giant Cat attack",
        "image_src": "http://placekitten.com/300/250",
        "options": [
            {
              "encounter_option_id": 1,
              "encounter_id": 1,
              "option_name": "sneak",
              "option_description": "try to sneak past the evil cat",
              "option_odds": "1d4+dex",
              "options_pass_case": 3,
              "success_text": "you snooked away",
              "failed_text": "the cat bite you",
              "success_encounter": 1,
              "failed_encounter": 1,
              "option_images_id": 1,
              "health_consquences": 3,
              "image_name": "sneak cat",
              "image_src": "http://placekitten.com/400/441"
            },
            {
              "encounter_option_id": 2,
              "encounter_id": 1,
              "option_name": "flirt",
              "option_description": "try to make the cat fall in love with your devilish charm",
              "option_odds": "1d4+cha",
              "options_pass_case": 3,
              "success_text": "you seduced the cat and now you have a have cat have person baby",
              "failed_text": "the cat bite you",
              "success_encounter": 1,
              "failed_encounter": 1,
              "option_images_id": 1,
              "health_consquences": 3,
              "image_name": "sneak cat",
              "image_src": "http://placekitten.com/400/441"
            },
            {
              "encounter_option_id": 3,
              "encounter_id": 1,
              "option_name": "fight",
              "option_description": "kinda rude tho?",
              "option_odds": "1d4+str",
              "options_pass_case": 3,
              "success_text": "you killed away the cat",
              "failed_text": "the cat bite you",
              "success_encounter": 1,
              "failed_encounter": 1,
              "option_images_id": 1,
              "health_consquences": 3,
              "image_name": "sneak cat",
              "image_src": "http://placekitten.com/400/441"
            }
        ]
    }
    ```
    </details>

<b><u>STORY ENDPOINTS</u></b>
Get `/api/story/:storyId`
<br/>
    Gets the data of a story by id
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/story/1`
      {
        "story_id": 1,
        "story_name": "harrison for punches ryan gosling",
        "user_id": 1,
        "story_description": "it actually happened",
        "story_level": 1,
        "completed_at": "2017-10-17T22:53:10.000Z",
        "start_encounter_id": 1
      }
      ```
    </details>

Get `/api/stories`
<br/>
    Gets the 5 most recent stories
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/stories`
      (normally will have 5 items in the array)
      [
        {
          "story_id": 1,
          "story_name": "harrison for punches ryan gosling",
          "user_id": 1,
          "story_description": "it actually happened",
          "story_level": 1,
          "completed_at": "2017-10-17T22:53:10.000Z",
          "start_encounter_id": 1,
          "user_name": "harrison ford",
          "email": "adventureBuilder2049@gmail.com",
          "name": "adventurer",
          "profile_picture": "http://placekitten.com/234/250",
          "auth_id": "asdtfasdgsfdgsdfgsdf"
        }
      ]
      ```
    </details>

Get `/api/user/stories/:username`
<br/>
    Gets the 5 most recent stories by users with the search term in their username
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/user/stories/harr`
      (normally will have 5 items in the array)
      [
        {
          "story_id": 1,
          "story_name": "harrison for punches ryan gosling",
          "user_id": 1,
          "story_description": "it actually happened",
          "story_level": 1,
          "completed_at": "2017-10-17T22:53:10.000Z",
          "start_encounter_id": 1,
          "user_name": "harrison ford",
          "email": "adventureBuilder2049@gmail.com",
          "name": "adventurer",
          "profile_picture": "http://placekitten.com/234/250",
          "auth_id": "asdtfasdgsfdgsdfgsdf"
        }
      ]
      ```
    </details>

Get `/api/levels/stories/:level`
<br/>
    Gets 5 most recenct stories by level
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/levels/stories/1`
      (normally will have 5 items in the array)
      [
        {
          "story_id": 1,
          "story_name": "harrison for punches ryan gosling",
          "user_id": 1,
          "story_description": "it actually happened",
          "story_level": 1,
          "completed_at": "2017-10-17T22:53:10.000Z",
          "start_encounter_id": 1,
          "user_name": "harrison ford",
          "email": "adventureBuilder2049@gmail.com",
          "name": "adventurer",
          "profile_picture": "http://placekitten.com/234/250",
          "auth_id": "asdtfasdgsfdgsdfgsdf"
        }
      ]
      ```
    </details>

Get `/api/storyName/:storyName`
<br/>
    Gets 5 most recent stories by name
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/storyName/harrison`
      (normally will have 5 items in the array)
      [
        {
          "story_id": 1,
          "story_name": "harrison for punches ryan gosling",
          "user_id": 1,
          "story_description": "it actually happened",
          "story_level": 1,
          "completed_at": "2017-10-17T22:53:10.000Z",
          "start_encounter_id": 1,
          "user_name": "harrison ford",
          "email": "adventureBuilder2049@gmail.com",
          "name": "adventurer",
          "profile_picture": "http://placekitten.com/234/250",
          "auth_id": "asdtfasdgsfdgsdfgsdf"
        }
      ]
      ```
    </details>

<b><u>CLASSES ENDPOINTS</u></b>
Get `/api/classes`
<br/>
    Gets the data of all the classes
    <details>
      <summary>Example Output</summary>
      ```
      Get `/api/classes`
      (would normally be three classes)
      [
        {
          "class_id": 1,
          "class_name": "test",
          "base_dexterity": 0,
          "base_strength": 0,
          "base_charisma": 5,
          "male_class_img": "http://placekitten.com/234/232",
          "female_class_img": "http://placekitten.com/234/232",
          "start_health_points": 18
        }
      ]
      ```
    </details>
