update player

  UPDATE [ ONLY ] table_name [ * ] [ [ AS ] alias ]
      SET { column_name = { expression | DEFAULT } |
            ( column_name [, ...] ) = ( { expression | DEFAULT } [, ...] ) |
            ( column_name [, ...] ) = ( sub-SELECT )
          } [, ...]
      [ FROM from_list ]
      [ WHERE condition | WHERE CURRENT OF cursor_name ]
      [ RETURNING * | output_expression [ [ AS ] output_name ] [, ...] ]
