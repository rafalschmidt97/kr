export function initPredictions(): void {
  document
    .querySelectorAll<HTMLElement>("[data-wedding-predictions]")
    .forEach((root) => {
      if (root.dataset.predictionsReady === "true") return;

      const steps = Array.from(
        root.querySelectorAll<HTMLElement>("[data-prediction-step]"),
      );
      const questions = Array.from(
        root.querySelectorAll<HTMLFieldSetElement>(
          "[data-prediction-question]",
        ),
      );
      const progress = root.querySelector<HTMLElement>(
        "[data-prediction-progress]",
      );
      const status = root.querySelector<HTMLElement>(
        "[data-prediction-status]",
      );
      const meter = root.querySelector<HTMLProgressElement>(
        "[data-prediction-meter]",
      );
      const navigation = root.querySelector<HTMLElement>(
        "[data-prediction-navigation]",
      );
      const back = root.querySelector<HTMLButtonElement>(
        "[data-prediction-back]",
      );
      const next = root.querySelector<HTMLButtonElement>(
        "[data-prediction-next]",
      );
      const reset = root.querySelector<HTMLButtonElement>(
        "[data-prediction-reset]",
      );
      const name = root.querySelector<HTMLInputElement>(
        "[data-prediction-name]",
      );
      const signature = root.querySelector<HTMLElement>(
        "[data-prediction-signature]",
      );
      const answers = Array.from(
        root.querySelectorAll<HTMLElement>("[data-prediction-answer]"),
      );

      // Leave the complete, readable questionnaire in place if enhancement cannot start.
      if (
        !questions.length ||
        steps.length !== questions.length + 2 ||
        answers.length !== questions.length ||
        !progress ||
        !status ||
        !meter ||
        !navigation ||
        !back ||
        !next ||
        !reset ||
        !name ||
        !signature ||
        steps.some((step) => !step.querySelector("[data-prediction-focus]"))
      )
        return;

      let currentStep = 0;
      const reviewIndex = steps.length - 1;

      const selectedAnswer = (question: HTMLFieldSetElement) =>
        question.querySelector<HTMLInputElement>('input[type="radio"]:checked');

      const clearError = (question: HTMLFieldSetElement) => {
        const error = question.querySelector<HTMLElement>(
          "[data-prediction-error]",
        );
        if (error) error.textContent = "";
        question.querySelectorAll("[aria-invalid]").forEach((input) => {
          input.removeAttribute("aria-invalid");
        });
      };

      const updateReview = () => {
        questions.forEach((question, index) => {
          const selected = selectedAnswer(question);
          answers[index].textContent =
            selected
              ?.closest("label")
              ?.querySelector("[data-prediction-choice-text]")
              ?.textContent?.trim() ?? "Nie wybrano odpowiedzi.";
        });
        signature.textContent = name.value.trim() || "Bez podpisu";
      };

      const showStep = (index: number, moveFocus = true) => {
        if (index < 0 || index >= steps.length) return;
        currentStep = index;
        if (index === reviewIndex) updateReview();

        steps.forEach((step, stepIndex) => {
          step.hidden = stepIndex !== index;
        });
        back.hidden = index === 0;
        next.hidden = index === reviewIndex;
        next.textContent =
          index === questions.length ? "Przejrzyj odpowiedzi" : "Dalej";
        status.textContent =
          index < questions.length
            ? `Krok ${index + 1} z ${steps.length} · Pytanie ${index + 1} z ${questions.length}`
            : `Krok ${index + 1} z ${steps.length} · ${index === reviewIndex ? "Podsumowanie" : "Opcjonalny podpis"}`;
        meter.value = index + 1;

        if (moveFocus) {
          steps[index]
            .querySelector<HTMLElement>("[data-prediction-focus]")
            ?.focus();
        }
      };

      next.addEventListener("click", () => {
        const question = questions[currentStep];
        if (question && !selectedAnswer(question)) {
          const error = question.querySelector<HTMLElement>(
            "[data-prediction-error]",
          );
          if (error)
            error.textContent = "Wybierz jedną odpowiedź, aby przejść dalej.";
          question.querySelectorAll('input[type="radio"]').forEach((input) => {
            input.setAttribute("aria-invalid", "true");
          });
          question
            .querySelector<HTMLElement>("[data-prediction-focus]")
            ?.focus();
          return;
        }
        if (question) clearError(question);
        showStep(currentStep + 1);
      });

      back.addEventListener("click", () => showStep(currentStep - 1));

      questions.forEach((question) => {
        question.addEventListener("change", () => clearError(question));
      });

      root
        .querySelectorAll<HTMLButtonElement>("[data-prediction-edit]")
        .forEach((button) => {
          button.addEventListener("click", () => {
            const index = Number(button.dataset.predictionEdit);
            if (Number.isInteger(index)) showStep(index);
          });
        });

      reset.addEventListener("click", () => {
        questions.forEach((question) => {
          question
            .querySelectorAll<HTMLInputElement>('input[type="radio"]')
            .forEach((input) => {
              input.checked = false;
            });
          clearError(question);
        });
        name.value = "";
        updateReview();
        showStep(0);
      });

      showStep(0, false);
      progress.hidden = false;
      navigation.hidden = false;
      reset.hidden = false;
      root.dataset.predictionsReady = "true";
    });
}
