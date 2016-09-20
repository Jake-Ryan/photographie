<?php
/**
 * @file
 * Contains \Drupal\amazing_forms\Form\ContributeForm.
 */

namespace Drupal\photographie_prints\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;

// This form is for a user who has already hired photographer, as a request for
//additional prints of photographs

/**
 * Contribute form.
 */
class ContributeForm extends FormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'photographie_prints';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['title'] = array(
      '#type' => 'textfield',
      '#title' => t('Title'),
      '#required' => TRUE,
    );

    $form['description'] = array(
      '#type' => 'textarea',
      '#title' => t('Description'),
    );

    $options = array(0 => t('small'), 1 => t('medium'), 2 => t('large'), 3 => t('Extra Large'));
    $form['sizes'] = array(
      '#type' => 'radios',
      '#title' => t('Select print size:'),
      '#default_value' => $options[1],
      '#description' => t('Select a print size for the selected images'),
    );

    $form['photoshop'] = array(
      '#type' => 'checkbox',
      '#title' => t('Photoshop these images?'),
      '#description' => t('Select if you would like photoshopping or touch-ups to these photographs before they are printed.'),
    );

    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Submit'),
    );

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    // Size selected
    // Data in important fields
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Compile an email
    // Flag some form of notification on site for photographer
  }
}
