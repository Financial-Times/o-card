o-card [![Circle CI](https://circleci.com/gh/Financial-Times/o-card/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-card/tree/master)
=================

This component is for displaying cards

- [Usage](#usage)
	- [Sass](#sass)
- [Migration guide](#migration-guide)
- [Contact](#contact)
- [Licence](#licence)

## Usage

### SCSS:

Add `@import 'o-card/main';` to your main SCSS file.

### Default elements

The following elements are supported by default:

	.o-card__meta {} 					// Area for meta data like tags and author quotes/images
	.o-card__tag {} 					// Small coloured tag at the top of the card
	.o-card__meta-image {} 				// Area for an author image or tag image to appear (60px square)
	.o-card__heading {} 				// Main heading of the card
	.o-card__standfirst {} 				// A short piece of content
	.o-card__image {}       			// An image for the card (with available [alignments](#image-alignment))
	.o-card__timestamp {} 				// A styled timestamp for the card
	.o-card__related-content {} 	 	// A list of related content links
	.o-card__related-content-item {} 	// A single item of a related content list

### Silent mode ([docs](http://origami.ft.com/docs/syntax/scss/#silent-styles))

If using `o-card` in silent mode, you can customise the block class by doing:

	.my-card {
	    @include oCard;
	}

Each element class has a `@mixin` as well (e.g. `oCardTag`), however when using the `landscape` theme, the [default elements](#default-elements) persist.

## Themes

There are three themes that can modify a card:

* standout - adds a darker background to the card
* landscape - used for a wider card and allows for left and right [image alignments](#image-alignment).
* opinion - changes the colour and typography of the card tag.

## Image alignment

The image can be aligned in four ways, depending on the layout of the card. The alignment is managed by [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) so no change in the source order is required.

### Portrait card

* top: image will be the first element in the card
* bottom: image will be the last element in the card, unless the card has related content, in which case it will be above the related content.

### Landscape card

In a landscape card the image can be aligned `left` (at 40% width of the card) or `right` (at 50% width of the card). In a landscape card, the heading will appear in the same row as the image and if used, a standfirst will appear below.

### Meta area and meta image

The meta area of the card by itself has no style. It's used to contain the `card__tag` and `card__meta-image` elements. The meta image element is a container for an `img` tag or icon and also has a theme of `--rounded` to make the container circular.

## Migration Guide

### Updating from v2 to v3

V2 -> V3 introduces the new majors of `o-colors` and `o-typography`. Updating to this new version will mean updating any other components that you have which are using `o-colors` or `o-typography`. There are no other breaking changes in this release.

----

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-card/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).


----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
