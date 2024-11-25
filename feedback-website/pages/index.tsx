import { Survey } from 'survey-react-ui';
import { Model } from 'survey-react-ui';
import { FlatDarkPanelless } from "survey-core/themes";

import { useCallback } from 'react';

const surveyJson = {
  pages: [{
      elements: [{
          name: "satisfaction-score",
          title: "How would you describe your experience with our product?",
          type: "radiogroup",
          choices: [
              { value: 5, text: "Fully satisfying" },
              { value: 4, text: "Generally satisfying" },
              { value: 3, text: "Neutral" },
              { value: 2, text: "Rather unsatisfying" },
              { value: 1, text: "Not satisfying at all" }
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "what-would-make-you-more-satisfied",
          title: "What can we do to make your experience more satisfying?",
          type: "comment",
      }, {
          name: "nps-score",
          title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
          type: "rating",
          rateMin: 0,
          rateMax: 10
      }],
  }, {
      elements: [{
          name: "how-can-we-improve",
          title: "In your opinion, how could we improve our product?",
          type: "comment"
      }],
  }, {
      elements: [{
          name: "disappointing-experience",
          title: "Please let us know why you had such a disappointing experience with our product",
          type: "comment"
      }],
  }]
};



export default function Home() {

  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);
  survey.applyTheme(FlatDarkPanelless);

  return <Survey model={survey} />

}