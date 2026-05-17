#!/usr/bin/env sh

if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY" = "2" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exit_code="$?"

  if [ "$exit_code" != 0 ]; then
    echo "husky - $hook_name script failed (code $exit_code)"
  fi

  if [ "$exit_code" = 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit "$exit_code"
fi
